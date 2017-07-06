// for (var i = 1; i < 100; i += 2) {
//   console.log(i);
// }

// for (var i = 1; i < 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }

//   console.log(i);
// }

// var SQFT_IN_METERS = 10.7639

// var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
// var width = parseInt(prompt('Enter the width of the room in meters:'), 10);
// var areaInMeters = length * width;
// var areaInSqFt = areaInMeters * SQFT_IN_METERS;

// console.log('The area of the room is ' + areaInMeters.toFixed(2) +
//             ' square meters (' + areaInSqFt.toFixed(2) + ' square feet).');

// var bill = parseInt(prompt('What is the bill?'));
// var tipPercentage = parseInt(prompt('What is the tip percentage?'));

// var tip = bill * (tipPercentage / 100);
// var total = bill + tip;

// console.log('The tip is $' + tip.toFixed(2));
// console.log('THe total is $' + total.toFixed(2));

// var integer = parseInt(prompt('Please enter an integer greater than 0: '), 10);
// var operation = prompt('Enter "s" to compute the sum, "p" to compute the product.');
// var result;

// var integers = [];
// for (var i = 1; i <= integer; i++) {
//   integers.push(i);
// }

// if (operation === 's') {
//   result = integers.reduce(function(sum, integer) {
//     return sum + integer;
//   });
//   printResult(operation, integer, result);
// } else if (operation === 'p') {
//   result = integers.reduce(function (product, integer) {
//     return product * integer;
//   });
//   printResult(operation, integer, result);
// } else {
//   console.log('Oops. Unknown operation.');
// }

// function printResult(operation, integer, result) {
//   console.log('The ' + operation + ' of the integers between 1 and ' + integer +
//             ' is ' + result +'.');
// }

// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else {
//     return str1 + str2 + str1;
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));   // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));   // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));        // "xyz"

// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     return true;
//   } else if (year % 400 === 0)  {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return (year % 4 === 0);
//   }
// }

// console.log(isLeapYear(2016));     // true
// console.log(isLeapYear(2015));     // false
// console.log(isLeapYear(2100));     // false
// console.log(isLeapYear(2400));     // true
// console.log(isLeapYear(240000));   // true
// console.log(isLeapYear(240001));   // false
// console.log(isLeapYear(2000));     // true
// console.log(isLeapYear(1900));     // false
// console.log(isLeapYear(1752));     // true
// console.log(isLeapYear(1700));     // true
// console.log(isLeapYear(1));        // false
// console.log(isLeapYear(100));      // true
// console.log(isLeapYear(400));      // true

// function multisum(n) {
//   var total = 0

//   for (var i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       total += i;
//     }
//   }

//   return total;
// }

// console.log(multisum(3));      // 3
// console.log(multisum(5));      // 8
// console.log(multisum(10));     // 33
// console.log(multisum(1000));   // 234168

// function asciiValue(str) {
//   var value = 0;
//   for (var i = 0; i < str.length; i++) {
//     value += str.charCodeAt(i);
//   }

//   return value;
// }

// console.log(asciiValue('Four score'));         // 984
// console.log(asciiValue('Launch School'));      // 1251
// console.log(asciiValue('a'));                  // 97
// console.log(asciiValue(''));                   // 0
