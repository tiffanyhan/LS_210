// function takes in a single argument called n (an integer)
// -n represents the max width and length of the diamond
// outputs a diamond (drawn with stars)

// edge cases
// -even number?
// -zero?
// -decimal?

// DATA STRUCTURE:
// -just need to use n as an integer for looping
// -output consists of strings

// ALGORITHM:
// from 1 to n (increment by 2s)
// -print out i number of stars
// from n - 2 to 1 (decrement by 2s)
// -again, print out i number of stars

// helper functions:
// -constructRow(starLength, n) outputs a string with stars and "proper" spacing/indentation
// -(n - (number of stars)) / 2 equals the number of spaces to add to the left side
// -starLength input must be an odd number

function diamond(n) {
  var increment = 2;
  for (var i = 1; i >= 1; i += increment) {
    console.log(constructRow(i, n));
    if (i === n)
      increment = -2;
  }
}

function constructRow(starLength, n) {
  var indentLength = (n - starLength) / 2;
  return ' '.repeat(indentLength) + '*'.repeat(starLength);
}

// console.log(constructRow(1, 9));
// //     *
// console.log(constructRow(7, 9));
//  *******

// console.log(diamond(1));
// logs
// *

// console.log(diamond(3));
// logs
//  *
// ***
//  *

// console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *