function myForEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

var min = Infinity;
var getMin = function(value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);     // undefined
// console.log(min);                         // 3

function myFilter(array, func) {
  var filtered = [];

  array.forEach(function(element) {
    if (func(element)) {
      filtered.push(element);
    }
  });

  return filtered;
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

// console.log(myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
//           {a: 1, b: 2, c: 3}], isPythagoreanTriple));
// returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]

function myMap(array, func) {
  var transformed = [];

  array.forEach(function(element) {
    transformed.push(func(element));
  });

  return transformed;
}

var plusOne = function(n) { return n + 1; };

// console.log(myMap([1, 2, 3, 4], plusOne));       // [2, 3, 4, 5]

function myReduce(array, func, initial) {
  var result;
  var index;

  result = initial ? initial : array[0];
  index = initial ? 0 : 1;

  array.slice(index).forEach(function(element) {
    result = func(result, element);
  });

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
