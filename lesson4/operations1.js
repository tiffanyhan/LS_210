function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

// var count = [1, 2, 3];
// console.log(push(count, 4));   // 4
// console.log(count);

function pop(array) {
  var newLength = array.length - 1
  var popped = array[newLength]
  array.length = newLength;
  return popped;
}

// var count = [1, 2, 3];
// console.log(pop(count));           // 3
// console.log(count);                // [ 1, 2 ]

function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array.length;
}

// var count = [1, 2, 3];
// console.log(unshift(count, 0));        // 4
// console.log(count);                    // [ 0, 1, 2, 3 ]

function shift(array) {
  var shifted = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return shifted;
}

// var count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]
