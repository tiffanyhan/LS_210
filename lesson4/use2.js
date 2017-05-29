function oddElementsOf(arr) {
  var oddArray = []
  for (var i = 1; i < arr.length; i += 2) {
    oddArray.push(arr[i]);
  }
  return oddArray;
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits)); // Returns [8, 16, 42]

function combinedArray(even, odd) {
  var result = [];

  for (var i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters)); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

var digits = [4, 8, 15, 16, 23, 42];
// console.log(mirroredArray(digits)); // Returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]


function joinArray(arr, joiner) {
  var str = String(arr[0]);

  joiner = joiner || '';
  for (var i = 1; i < arr.length; i++) {
    str += joiner + String(arr[i]);
  }

  return str;
}

// console.log(joinArray(['a', 'b', 'c'], '+')); // Returns "a+b+c"
// console.log(joinArray([1, 4, 1, 5, 9, 2, 7])); // Returns "1415927"

function sortDescending(arr) {
  return arr.slice().sort(function(a, b) { return b - a; });
}

var array = [23, 4, 16, 42, 8, 15]
var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
// console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
// console.log(array);    // Logs [23, 4, 16, 42, 8, 15])

function matrixSums(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reduce(function(acc, val) { return acc + val });
  }
  return arr;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]

function uniqueElements(arr) {
  var uniques = [];

  for (var i = 0; i < arr.length; i++) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]
