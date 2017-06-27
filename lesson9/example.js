// - Input: two version numbers in string representation, version1 and version2
// - Output: one of the numbers from 1, 0 and -1, or null for invalid inputs.

// - if any inputs contain invalid characters, return `null`
//   - any characters other than digits and `.` are considered invalid.
// - Compare the two input versions
//   - if version1 > version2, return `1`
//   - if version1 < version2, return `-1`
//   - if version 1 === version2, return `0`

// 0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// split on .
// compare from left to right
// if number is bigger or smaller, comparison resolved
// if numbers are the same, move on to next number

// if one of the numbers doesn't exist, but the other number does,
// assume the missing number is 0

// - if we reach the end of only one number, pad that number with a 0 part.
// - if we get to the last number part of the two version numbers and they're equal,
//   then the two version numbers are equal

// 1.a is not a valid version          // we only want to deal with numbers and dots
// .1 and 1. are not a valid versions  // versions must begin and end with a number
// 1..0 is not a valid version         // dots can only appear between two numbers
// 1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
// 1.0.0 is less than 1.1              // can handle version numbers with different lengths
// 1.0 is less than 1.0.5              // can handle version numbers with different length

// - return null if the inputs contain any other characters than digits and dots
// - split the input numbers into parts as arrays of integers
// - loop through the two version numbers' parts
//   - for each step, access one part from each version number
//   - if one version number runs out of part, use 0
//   - compare the two parts
//     - if part1 < part2
//       - return 1
//     - if part1 > part2
//       - return 2
//     - if part1 === part2
//       - we move to the next pair of parts
// - when we reach the end of the loop, return 0

function compareVersions(v1, v2) {
  var validChars = /^\d+(\.\d+)*$/;
  if (!validChars.test(v1) || !validChars.test(v2))
    return null;

  var v1Array = v1.split('.').map(Number);
  var v2Array = v2.split('.').map(Number);
  var maxLength = Math.max(v1Array.length, v2Array.length);

  var part1;
  var part2;
  for (var i = 0; i < maxLength; i++) {
    part1 = v1Array[i] || 0;
    part2 = v2Array[i] || 0;

    if (part1 > part2) {
      return 1;
    } else if (part1 < part2) {
      return -1;
    }
  }

  return 0;
}

// console.log(compareVersions('1.18.2', '13.37')); // -1
// console.log(compareVersions('1', '1'));          // 0
// console.log(compareVersions('1.1', '1.0'));      // 1
// console.log(compareVersions('2.3.4', '2.3.5'));  // -1
// console.log(compareVersions('1.a', '1'));        // null
// console.log(compareVersions('.1', '1'));         // null
// console.log(compareVersions('1.', '2'));         // null
// console.log(compareVersions('1..0', '2.0'));     // null
// console.log(compareVersions('1.0', '1.0.0'));    // 0
// console.log(compareVersions('1.0.0', '1.1'));    // -1
// console.log(compareVersions('1.0', '1.0.5'));    // -1
