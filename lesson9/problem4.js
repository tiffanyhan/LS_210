// function input is a string of numbers written in "short-hand" notation
// outputs a list of all the numbers (an array)?

// what is "short-hand" notation?
// -only the significant part of the number is written
// -numbers always increase, go from smaller to bigger
// -can include ranges, signified by (-), (:), or (..)
// -can be multiple ranges in a row
// -each number or range is comma-separated

// what does significant part of the number mean?
// - from the last number, keep incrementing (number) until you get to a number
//   that ends with the significant part specified (endsWith, a string method)

// what does a range mean?
// -the smallest number is the number to the left of the separator
// -the biggest number is the number to the right of the separator
// -a range is all the numbers between (incrementing by 1) including the smallest and biggest
// -assume we're working with integers

// working with multiple ranges?
// -seems like you only need to worry about the last number in the range,
//  once you've translated from shorthand to actual numbers
// -the "extra" number is just there to help disambiguate the value of the last number

// DATA STRUCTURE:
// seems like you have to go btwn number (to increment) and string (for endsWith)
// also array for the outer data structure

// ALGORITHM:
// iterate through each character of the string,
  // -set currDigit = '';
  // -if it's a digit, concat it to currDigit
  // -else (comma or sep) use nextNumber to expand currDigit
    // -and transfer comma or sep as-is to the new string.

// now split on the commas
// if there is a range separator, map it to expanded numbers using expandRange

// HELPER FUNCTIONS:
// nextNumber(number, sigPart)
  // -always take the first number literally/as-is
  // -add 1 to the number until you get a number whose string representation ends with
  // -the significant part
  // -repeat for that number, and so on
// expandRange(lower, upper);
  // -use regex to only get required lower and upper from multiple ranges in a row

function expandRange(string) {
  var lower = Number(string.match(/^\d+/)[0]);
  var upper = Number(string.match(/\d+$/)[0]);

  var result = [];
  for (var i = lower; i <= upper; i++) {
    result.push(i);
  }

  return result;
}

// console.log(expandRange('1:5:12')); // [1, 2, 3... 12]
// console.log(expandRange('1-5:12')); // [1, 2, 3... 12]
// console.log(expandRange('3:5..9')); // [1, 2, 3... 12]
// console.log(expandRange('13:55..99')); // [13, 14, 15... 99]

function nextNumber(numString, sigPart) {
  numString = numString || '0';
  // console.log(numString, sigPart);
  do {
    numString = String(Number(numString) + 1);
  } while (!numString.endsWith(sigPart));

  return numString;
}

// console.log(nextNumber('7', '2')); // '12'
// console.log(nextNumber('1', '1')); // '11'
// console.log(nextNumber('104', '2')); // '112'
// console.log(nextNumber('104', '02')); // '202'
// console.log(nextNumber('564', '11')); // '611'

function shorthandToNumbers(numString) {
  var translated = ''
  var lastDigit = '';
  var currDigit = '';
  var char;

  for (var i = 0; i < numString.length; i++) {
    char = numString[i];
    if (/\d/.test(char)) {
      currDigit += char;
    } else {
      // concat currDigit to translated
      translated += nextNumber(translated[i - 1] || '0', currDigit);
      lastDigit = currDigit;
      currDigit = '';
      translated += char;
    }
  }

  return translated;
}

console.log(shorthandToNumbers('1,3,7,2,4,1')); // 1, 3, 7, 12, 14, 21
console.log(shorthandToNumbers('1-3,1-2')); // 1, 2, 3, 11, 12
console.log(shorthandToNumbers('1:5:2')); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
console.log(shorthandToNumbers('104-2')); // 104, 105, 106, 107, 108, 109, 110, 111, 112
console.log(shorthandToNumbers('104..02')); // 104, 105, etc to 202
console.log(shorthandToNumbers('545,64:11')); // 545, 564, 565, 566, etc to 611
