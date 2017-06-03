// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice();
// // Array.from(myArray);

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

function concat() {
  // ...
  var newArray = [];
  var currentArg;

  for (var j = 0; j < arguments.length; j++) {
    currentArg = arguments[j];

    if (Array.isArray(currentArg)) {
      for (var i = 0; i < currentArg.length; i++) {
        newArray.push(currentArg[i]);
      }
    } else {
      newArray.push(currentArg);
    }
  }

  return newArray;
}

// console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(concat([1, 2], "a", ["one", "two"]));               // [ 1, 2, "a", "one", "two" ]
// console.log(concat([1, 2], ["three"], 4));                      // [ 1, 2, "three", 4 ]

// console.log(concat([1, 2, 3], [4, 5, 6]));            // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                       // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));        // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                  // [2, 3, "four"]


// var obj = { a: 2, b: 3 };
// var newArray = concat([2, 3], obj);      // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                                // [2, 3, { a: 'two', b: 3 }]

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, obj];
// var arr3 = concat(arr1, arr2);
// arr3;                                    // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

// arr3[5].b = 3;                           // or arr3[5]['b'] = 3
// console.log(obj);                                     // { a: 'two', b: 3 }

function pop(array) {
  var lastIndexOfArray = array.length - 1;
  var popValue = array[lastIndexOfArray];
  if (lastIndexOfArray > -1) {
    array.length = lastIndexOfArray;
  }
  return popValue;
}

// var array = [1, 2, 3];
// pop(array);                   // 3
// console.log(array);           // [1, 2]
// console.log(pop([]));                      // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']])); // [ 'a', 'b', 'c' ]

function push(array) {
  for (var i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }

  return array.length;
}

// var array = [1, 2, 3];
// push(array, 4, 5, 6);         // 6
// console.log(array);           // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));     // 3
// console.log(push([], 1));                  // 1
// console.log(push([]));                     // 0

function reverse(input) {
  var isArray = Array.isArray(input);
  var reversed = isArray ? [] : '';

  for (var i = input.length - 1; i >= 0; i--) {
    if (isArray) {
      reversed.push(input[i]);
    } else {
      reversed += input[i];
    }
  }

  return reversed;
}

// console.log(reverse('Hello'));          // olleH
// console.log(reverse('a'));              // a
// console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
// console.log(reverse([]));               // []

function shift(array) {
  // shiftValue = array[0];
  // array.splice(0, 1);
  // return shiftValue;
  return array.splice(0, 1).pop();
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4 ,5]));        // [1, 2, 3]

function unshift(array) {
  var offset = arguments.length - 1;
  var copy = array.slice();

  for (var i = 0; i < copy.length; i++) {
    array[i + offset] = copy[i];
  }

  for (i = 1; i < arguments.length; i++) {
    array[i - 1] = arguments[i];
  }

  return array.length;
}

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2 ,3]));      // 3

// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]

function slice(array, begin, end) {
  // ...
  var slicedArray = [];
  for (var i = begin; i < end; i++) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

// console.log(slice([1, 2, 3], 1, 2));           // [2]
// console.log(slice([1, 2, 3], 2, 0));           // []
// console.log(slice([1, 2, 3], 5, 1));           // []

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                 // [2, 3]
// console.log(arr);                              // [1, 2, 3]

// function splice(array, start, deleteCount) {
//   // ...
//   if (deleteCount > array.length - start) {
//     deleteCount = array.length - start;
//   }
//   var splicedArray = [];
//   var offset = deleteCount;
//   var endOfShifting = start + offset;
//   var numOfOptArgs = arguments.length - 3;

//   for (var i = start; i < endOfShifting; i++) {
//     splicedArray.push(array[i]);
//     array[i] = array[i + offset];
//   }

//   array.length = array.length - deleteCount;

//   // if (numOfOptArgs > 0) {
//   //   offset = numOfOptArgs;
//   //   endOfShifting = array.length;
//   // }

//   // for (var k = array.length + numOfOptArgs - 1; k > start; k--) {
//   //   array[k] = array[k - offset];
//   // }

//   // for (var j = 0; j < numOfOptArgs.length; j++) {
//   //   console.log(array[j + start], arguments[j + 3]);
//   //   array[j + start] = arguments[j + 3];
//   // }

//   return splicedArray;
// }

// function splice(array, start, deleteCount) {
//   var deleted = [];

//   if (start > array.length) {
//     start = array.length;
//   }

//   if (deleteCount > array.length - start) {
//     deleteCount = array.length - start;
//   }

//   if (start + deleteCount < array.length) {

//   }

//   array.length = array.length - deleteCount;

//   return deleted;
// }

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2));                         // [2, 3]
// console.log(arr);                                       // [1]

// var arr = [1, 2, 3];
// console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
// console.log(arr);                                       // [1]

// var arr = [1, 2, 3];
// console.log(splice([1, 2, 3], 1, 0));                   // []
// console.log(arr);                                       // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(splice([1, 2, 3], 0, 1));                   // [1]
// console.log(arr);                                       // [2, 3]

// var arr = [1, 2, 3];
// console.log(splice([1, 2, 3], 1, 0, 'a'));              // []
// console.log(arr);                                       // [1, 'a', 2, 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));                  // [2]
// console.log(arr);                                       // [1, 'two', 3];

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
// console.log(arr);                                       // [1, "two", "three"]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                         // []
// console.log(splice(arr, 1, 0, 'a'));                    // []
// console.log(arr);                                       // [1, 'a', 2, 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));                    // []
// console.log(arr);                                       // ['a', 1, 2, 3]

function oddities(array) {
  var oddElements = [];
  for (var i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

// console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);   // false
// console.log(oddities(['abc', 'def']) === ['def']);      // false

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  var index;
  var copy2 = array2.slice();
  for (var i = 0; i < array1.length; i++) {
    index = copy2.indexOf(array1[i]);
    if (index >= 0) {
      copy2.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
// console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
// console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
// console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
// console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
// console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false

// function splice(array, start, deleteCount) {
//   deleteCount = deleteCount > array.length - start ? array.length - start : deleteCount;

//   var deletions = array.slice(start, start + deleteCount);
//   var additions = Array.prototype.slice.call(arguments, 3);

//   if (start + deleteCount < array.length) {
//     for (var i = start; i < array.length; i++) {
//       array[i] = array[i + deleteCount];
//     }
//   }
//   array.length = array.length - deleteCount;

//   for (i = array.length + additions.length - 1; i >= start; i--) {
//     array[i] = array[i - additions.length];
//   }

//   for (i = 0; i < additions.length; i++) {
//     array[i + start] = additions[i];
//   }

//   return deletions;
// }

function splice(array, start, deleteCount) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  var arrayCopy = array.slice();
  var itemCount = Array.prototype.slice.call(arguments, 3).length;
  var newLength = array.length + itemCount - deleteCount;
  array.length = newLength;

  for (var i = 0; i < start; i++) {
    array[i] = arrayCopy[i];
  }

  for (var i = 0; i < itemCount; i++) {
    array[start + i] = arguments[3 + i];
  }

  for (var i = 0, length = arrayCopy.length - (start + deleteCount); i < length; i++) {
    array[start + itemCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2));                         // [2, 3]
// console.log(arr);                                       // [1]

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 3));                         // [2, 3]
// console.log(arr);                                       // [1]

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                         // []
// console.log(arr);                                       // [1, 2, 3]

// arr = [1, 2, 3];
// console.log(splice(arr, 0, 1));                         // [1]
// console.log(arr);                                       // [2, 3]

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 0, 'a'));                    // []
// console.log(arr);                                       // [1, 'a', 2, 3]

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));                  // [2]
// console.log(arr);                                       // [1, 'two', 3];

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));          // [2 ,3]
// console.log(arr);                                       // [1, "two", "three"]

// arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                         // []
// console.log(splice(arr, 1, 0, 'a'));                    // []
// console.log(arr);                                       // [1, 'a', 2, 3]

// arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));                    // []
// console.log(arr);                                       // ['a', 1, 2, 3]
