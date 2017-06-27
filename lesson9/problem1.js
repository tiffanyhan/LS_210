// function takes in a string of digits, representing a phone number
// outputs the "cleaned up" phone number

// what is a "cleaned up" phone number?
// - a string of 10 digits

// for "bad" phone numbers, return a string of 10 zeroes '0000000000'

// what is a "bad" number?
// - more than 11 digits
// - less than 10 digits
// - 11 digits and first number is something other than 1

// what is a "good number"?
// - exactly 10 digits
// - 11 digits and first number is 1 (trim the 1)

// DATA STRUCTURE: string, for regex and trim

// ALGORITHM:
// - extract only digits from the string using a regex
// - determine if the string is "good" or bad" based on rules

// rules represented in code by if conditionals?
// - if more than 11 or less than 10 digits, number is bad
// - if exactly 10 digits, number is good
// - if 11 digits,
//   - if first number is 1, number is good
//   - else number is bad

function cleanupPhoneNumber(string) {
  var DEFAULT = '0'.repeat(10);
  var digitString = string.replace(/\D/g, '');
  var len = digitString.length;

  if (len === 10) {
    return digitString;
  } else if (len === 11 && digitString[0] === '1') {
    return digitString = digitString.slice(1);
  } else {
    return DEFAULT;
  }
}

// console.log(cleanupPhoneNumber('16262157941'));      // '6262157941' test 11 digits with leading 1 good
// console.log(cleanupPhoneNumber('6262157941'));       // '6262157941' test exactly 10 digits good
// console.log(cleanupPhoneNumber('216262157941'));     // '0000000000' test more than 11 digits bad
// console.log(cleanupPhoneNumber('262157941'));        // '0000000000' test less than 10 digits bad
// console.log(cleanupPhoneNumber('56262157941'));      // '0000000000' test 11 digits without leading 1 bad
// console.log(cleanupPhoneNumber('(626) 215-7941'));   // '6262157941' test exactly 10 digits good, with other chars
// console.log(cleanupPhoneNumber('+1 (626) 215-7941'));// '6262157941' test 11 digits with leading 1 good, with other chars
// console.log(cleanupPhoneNumber('+5(626)215-7941'));  // '0000000000' test 11 digits without leading 1 bad
// console.log(cleanupPhoneNumber(''));                 // '0000000000' test empty string bad
