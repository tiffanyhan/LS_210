// var number1 = prompt('Enter the first number:');
// var number2 = prompt('Enter the second number:');

// console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
// console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
// console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
// console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
// console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
// console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// var str = "35833";
// str[0] - '0'

// function stringToSignedInteger(numberString) {
//   var values = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
//                 '6': 6, '7': 7, '8': 8, '9': 9};
//   var sum = 0;
//   var stringArray = numberString.split("");
//   stringArray.reverse().forEach(function(element, index) {
//     if (Object.keys(values).includes(element)) {
//       var n = values[element] * (10 ** index);
//       sum += n;
//     }
//   });
//   if (stringArray.slice(-1)[0] === '-') {
//     console.log('last if statement ran');
//     sum *= -1;
//   }
//   return sum;
// }

// console.log(stringToSignedInteger('4321'));      // 4321
// console.log(stringToSignedInteger('-570'));      // -570
// console.log(stringToSignedInteger('+100'));      // 100

// var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(integer) {
//   var string = '';
//   var remainder;

//   do {
//     remainder = integer % 10;
//     string = DIGITS[remainder] + string;
//     integer = Math.floor(integer / 10);
//   } while (integer > 0);

//   return string;
// }

// // console.log(integerToString(4321));    // "4321"
// // console.log(integerToString(0));       // "0"
// // console.log(integerToString(5000));    // "5000"

// function signedIntegerToString(integer) {
//   if (integer > 0) {
//     return '+' + integerToString(integer);
//   } else if (integer < 0) {
//     return '-' + integerToString(-integer);
//   } else {
//     return integerToString(integer);
//   }
// }

// console.log(signedIntegerToString(4321));      // "+4321"
// console.log(signedIntegerToString(-123));      // "-123"
// console.log(signedIntegerToString(0));         // "0"
