// function takes in single string of digits
// outputs true or false, representing whether it is valid

// what does valid mean?
// -going from right to left
// -double every second digit (numbers in btwn stay the same)
// -if after doubling the number is 10 or more, subtract 9 from it
// -sum up all the numbers
// -if the sum is divisible by 10, then return true
//   -else return false

// DATA STRUCTURE:
// convert string to array

// ALGORITHM:
// extract digits from the string (match, regex)
// match will return an array of digits
// reverse the array, to go from right to left
// transform every second digit (odd index) by doubling it
  // -convert string to number
  // -check if doubled number is 10 or more, if so subtract 9 from it
// reduce the array of digits to get the sum
// check if sum is divisble by 10 (modulus)
  // -if so, return true
  // -else, return false

function makeLuhnSum(digitString) {
  var digits = digitString.match(/\d/g).map(Number);
  var total = digits.reverse().map(function(digit, index) {
    if (index % 2 === 1) {
      digit *= 2;
    }
    return digit >= 10 ? digit - 9 : digit;
  }).reduce(function(sum, digit) { return sum + digit; });

  return total;
}

function luhnCheck(digitString) {
  var total = makeLuhnSum(digitString);
  return total % 10 === 0;
}

// console.log(luhnCheck('2323 2005 7766 3554')); // true
// console.log(luhnCheck('2323 2005 7666 3554')); // false
// console.log(luhnCheck('2323D2005!7766-3554')); // true
// console.log(luhnCheck('2323200577663554')); // true
// console.log(luhnCheck('2323.2005)7666$3554!!!')); // false
// console.log(luhnCheck('1111')); // false
// console.log(luhnCheck('8763')); // true

// function takes in a single string of digits
// if invalid, outputs that same string of digits, with a checkdigit concatted
// if valid, outputs the same string of digits unchanged

// first check to see if input string is valid or invalid,
// using the previous luhnCheck function

// examples of invalid sums: 61, 62, 63, 64, 65, 66, 67, 68, 69

// first add '0' to the rightmost of the digitString
// then calculate the new 'luhnSum' (bc of changed indices)
// if still invalid, get last digit of newSum.
// checkdigit = 10 - lastdigit.
// concat the checkdigit to the digitString and return.

// what about other characters?!

function makeCheckdigit(digitString) {
  if (luhnCheck(digitString)) { return digitString; }

  digitString += '0';
  if (!luhnCheck(digitString)) {
    var total = makeLuhnSum(digitString);
    var checkdigit = 10 - (makeLuhnSum(digitString) % 10);
    var lastIndex = digitString.length - 1;
    digitString = digitString.slice(0, lastIndex) + String(checkdigit);
  }

  return digitString;
}

// console.log(makeCheckdigit('2323 2005 7766 355')); // '2323 2005 7766 3554'
// console.log(makeCheckdigit('2323 2005 7766 3554')); // '2323 2005 7766 3554'
// console.log(makeCheckdigit('1111')); // '11114'
// console.log(makeCheckdigit('2324')); // '23242'
