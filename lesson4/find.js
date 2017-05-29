function missing(arr) {
  var missing = [];
  var lowest = arr[0];
  var highest = arr[arr.length - 1];

  for (var int = lowest; int < highest; int++) {
    if (arr.indexOf(int) === -1) {
      missing.push(int);
    }
  }

  return missing;
}

// console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
// console.log(missing([1, 2, 3, 4]));                    // []
// console.log(missing([1, 5]));                          // [2, 3, 4]
// console.log(missing([6]));                             // []
