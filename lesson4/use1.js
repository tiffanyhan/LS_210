function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A'])); // Returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A'])); // Returns "A"

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3)); // Returns 16
// console.log(nthElementOf(digits, 8)); // What does this return? undefined
// console.log(nthElementOf(digits, -1)); // What does this return? undefined

// digits[-1] = -42;
// nthElementOf(digits, -1);
// console.log(digits[-1]);
// console.log(digits['-1']); // Note that we are using a string here

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]

function lastNOf(arr, count) {
  // return arr.slice(-count);

  var index = arr.length - count;
  if (index < 0) {
    index = 0;
  }
  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 8)); // Returns [16, 23, 42]

function endsOf(arr1, arr2) {
  return [arr1[0], arr2[arr2.length - 1]];
}

// console.log(endsOf([4, 8, 15], [16, 23, 42])); // Returns [4, 42]
