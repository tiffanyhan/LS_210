// how to convert decimal number to degrees, minutes, seconds
// the integer is the degree

function dms(decimal) {
  var MINUTES_IN_DEGREE = 60;
  var SECONDS_IN_DEGREE = 3600;

  var remainder = decimal - Math.floor(decimal);
  var minutes = Math.floor(remainder * MINUTES_IN_DEGREE);
  var remainderMinusMin = (remainder - (minutes / MINUTES_IN_DEGREE));
  var seconds = Math.floor(remainderMinusMin * SECONDS_IN_DEGREE);

  return formattedDms(Math.floor(decimal), minutes, seconds);
}

function formattedDms(degrees, minutes, seconds) {
  var DEGREE = '\xB0';

  return String(degrees) + DEGREE +
         leftPadWithZeroes(String(minutes), 2) + '\'' +
         leftPadWithZeroes(String(seconds), 2) + '"';
}

function leftPadWithZeroes(string, length) {
  while (string.length < length) {
    string = '0' + string;
  }

  return string;
}

console.log(leftPadWithZeroes('5', 2)); // '05'
console.log(leftPadWithZeroes('3', 3)); // '003'
console.log(leftPadWithZeroes('11', 2)); // '11'

console.log(dms(30));        // 30°00'00"
console.log(dms(76.73));     // 76°43'48"
console.log(dms(254.6));     // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0));         // 0°00'00"
console.log(dms(360));       // 360°00'00" or 0°00'00"

function union(arr1, arr2) {
  var result = [];
  var limit = Math.max(arr1.length, arr2.length);

  copyNonDupsTo(arr1, result);
  copyNonDupsTo(arr2, result);

  return result;
}

function copyNonDupsTo(arr, result) {
  arr.forEach(function(el) {
    if (!inArray(el, result)) {
      result.push(el);
    }
  });
}

function inArray(element, arr) {
  return arr.indexOf(element) > -1;
}

// console.log(union([1, 3, 5], [3, 6, 9]));          // [1, 3, 5, 6, 9]
// console.log(union([1, 3, 5], [3, 6, 9, 10, 13]));  // [1, 3, 5, 6, 10, 13]
// console.log(union([1, 3, 5], [3, 5, 6, 9]));       // [1, 3, 5, 6, 9]

// FOR ODD: .slice(0, Math.ceil(length / 2)), .slice(Math.ceil(length / 2))
// FOR EVEN: .slice(0, length / 2), .slice(length / 2)

function halvsies(arr) {
  var center = Math.ceil(arr.length / 2);
  var firstHalf = arr.slice(0, center);
  var secondHalf = arr.slice(center);
  return [firstHalf, secondHalf];
}

// console.log(halvsies([1, 2, 3, 4]));    // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));             // [[5], []]
// console.log(halvsies([]));              // [[], []]

function findDup(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

// console.log(findDup([1, 5, 3, 1]));                              // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]));  // 73

function interleave(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
}

// console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']

function showMultiplicativeAverage(numbers) {
  var product = numbers.reduce(function(product, num) {
    return product * num;
  });

  return (product / numbers.length).toFixed(3);
}

// console.log(showMultiplicativeAverage([3, 5]));                 // '7.500'
// console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // '28361.667'

function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => num * arr2[index]);
}

// console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

function digitList(number) {
  return String(number).split('').map(Number);
}

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  var counts = {};

  vehicles.forEach(function(vehicle) {
    counts[vehicle] = counts[vehicle] || 0;
    counts[vehicle] += 1;
  });

  logCounts(counts);
}

function logCounts(countObj) {
  Object.keys(countObj).forEach(function(key) {
    console.log(key + ' => ' + countObj[key]);
  });
}

// countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function average(numbers) {
  var sum = numbers.reduce((sum, num) => sum + num);
  return Math.floor(sum / numbers.length);
}

// console.log(average([1, 5, 87, 45, 8, 8]));    // 25
// console.log(average([9, 47, 23, 95, 16, 52])); // 40
