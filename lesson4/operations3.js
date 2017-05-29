function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function slice(array, startIndex, endIndex) {
  var slicedArray = [];
  for (var i = startIndex; i < endIndex; i++) {
    push(slicedArray, array[i]);
  }
  return slicedArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                         // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));     // [ 'b', 'c' ]

// TODO: understand why startIndex remains constant while i changes
function splice(array, startIndex, removeLength) {
  var removedArray = [];

  for (var i = startIndex; i < array.length; i++) {
    if (i < startIndex + removeLength) {
      push(removedArray, array[i]);
    }
    array[i] = array[i + removeLength];
  }

  array.length = array.length - removeLength;
  return removedArray;
}

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
// console.log(count);                      // [ 1, 2, 8]

function concat(arr1, arr2) {
  var concattedArray = [];
  for (var i = 0; i < arr1.length; i++) {
    push(concattedArray, arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    push(concattedArray, arr2[i]);
  }

  return concattedArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(array, separator) {
  result = '';

  for (var i = 0; i < array.length; i++) {
    result += array[i].toString();

    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'