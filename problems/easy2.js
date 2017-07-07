// Write a function that takes a string argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

// input is a string argument
// output is the same string argument with duplicated characters replaced
//   with single character

// duplicated characters?  more than one character in a row

// DATA STRUCTURE:
// input is a string
// convert to array (for iteration)
// convert back to string (using join)

// ALGORITHM
// create a new string
// iterate through the string
// check if current char is same as last char in new string
// if same, continue
// else add to new string

function crunch(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === result[result.length - 1]) {
      continue;
    }

    result += string[i];
  }

  return result;
}

// console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
// console.log(crunch('4444abcabccba'));                  // '4abcabcba'
// console.log(crunch('ggggggggggggggg'));                // 'g'
// console.log(crunch('a'));                              // 'a'
// console.log(crunch(''));                               // ''
// console.log(crunch('!????^^^^^^      '));              // '!?^ '
// console.log(crunch(' '));                              // ' '

// Write a function that will take a short line of text, and write it to the console log
// within a box.

// You may assume that the output will always fit in your browser window.

// function input
// -text, input as a string argument
// function output
// - same text printed inside a box

// rules (convert english to technical language)
// -middle row contains pipe character, whitespace character, text, whitespace character,
//  pipe character.
// -padding rows contain pipe character, (text.length + 2) whitespace characters,
//  pipe character.
// -boundary rows contain + character, (text.length + 2) - characters, + character.

// edge cases/test cases

// data structure
// -console.log each line

// algorithm
// -helper functions, such as returnBoundaryRow() and returnPaddingRow();

function logInBox(text) {
    console.log(returnNonTextRow('+', '-', text));
    console.log(returnNonTextRow('|', ' ', text));
    console.log('| ' + text + ' |');
    console.log(returnNonTextRow('|', ' ', text));
    console.log(returnNonTextRow('+', '-', text));
}

function returnNonTextRow(outer, inner, text) {
    return outer + inner.repeat(text.length + 2) + outer;
}

// console.log(logInBox('To boldly go where no one has gone before.'));

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('hello.');

// +--------+
// |        |
// | hello. |
// |        |
// +--------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Write a function that takes one argument, a positive integer,
// and returns a string of alternating 1s and 0s, always starting with 1.
// The length of the string should match the given integer.

function stringy(integer) {
    var result = '';
    for (var i = 1; i <= integer; i++) {
        if (i % 2 === 1) {
            result += '1';
        } else {
            result += '0';
        }
    }

    return result;
}

// console.log(stringy(6)); // '101010'
// console.log(stringy(9)); // '101010101'
// console.log(stringy(4)); // '1010'
// console.log(stringy(7)); // '1010101'

// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first 2 numbers are 1 by definition, and each subsequent number is
// the sum of the two previous numbers. This series appears throughout the natural
// world.

// Computationally, the Fibonacci series is a simple series, but the results grow
// at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,
// 848,179,261,915,075 -- that's enormous, especially considering that it takes 6
// iterations just to find the first 2 digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified as an argument. (The first
// Fibonacci number has index 1.)

// function input:
// digits- the target number of digits
// function output:
// index of the first number with the targeted number of digits

// rules (convert english to technical language)
// index starts at 1
// sequence is (a=1, b=1, c=a+b, d=b+c, e=c+d, etc...)

// edge cases/ test cases

// data structure
// use numbers to calculate fibonnaci sequence
// use numbers to keep track of index
// convert number to string to check length

// algorithm
// index = 3
// last = 1
// secondToLast = 1
// sum = last + secondTolast
// String(sum).length = argument? if so break, if not continue
// secondToLast = last
// last = sum

function findFibonacciIndexByLength(digits) {
  var last = 1;
  var secondToLast = 1;
  var sum;
  var index = 2;

  do {
    sum = last + secondToLast;
    secondToLast = last;
    last = sum;
    index++;
  } while (String(last).length < digits);

  return index;
}

// console.log(findFibonacciIndexByLength(2));     // 7
// console.log(findFibonacciIndexByLength(10));    // 45
// console.log(findFibonacciIndexByLength(16));    // 74
// console.log(findFibonacciIndexByLength(1));     // 1
// console.log(findFibonacciIndexByLength(0));  // undefined
// console.log(findFibonacciIndexByLength(-5)); // undefined

// Write a function that takes a positive integer, n, as an argument,
// and logs a right triangle whose sides each have n stars.
// The hypotenuse of the triangle (the diagonal side in the images below)
// should have one end at the lower-left of the triangle, and the other
// end at the upper-right.

// function input is a single integer argument, representing side length
// output is a right triangle whose sides are each of n length

// rules (translates english to technical language)
// first row: 1 star, with (n - 1) spaces to the left
// second row: 2 stars, with (n - 2) spaces to the left
// etc.
// last row: n stars, with (n - n) spaces to the left

// edge cases/ test cases
// -even number? probably don't need to account for it

// data structure:
// -keep n as an integer
// -output will be strings

// algorithm:
// loop through from i to n
// for each iteration, construct a string with (n-i) spaces and i number of stars

function triangle(n) {
  for (var i = 1; i <= n; i++) {
    console.log(makeTriangleRow(i, n));
  }
}

function makeTriangleRow(i, n) {
  return ' '.repeat(n - i) + '*'.repeat(i);
}

// console.log(makeTriangleRow(3, 5));
//   ***

// console.log(makeTriangleRow(1, 9));
//         *

// console.log(makeTriangleRow(5, 5));
// *****

// triangle(1);
// *

// triangle(3);

//   *
//  **
// ***

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// var noun = prompt('Enter a noun: ');
// var verb = prompt('Enter a verb: ');
// var adjective = prompt('Enter an adjective: ');
// var adverb = prompt('Enter an adverb: ');

// console.log('Do you ' + verb + ' your ' + adjective + ' ' + noun + ' ' +
//             adverb + '? That\'s hilarious!');

// function input is a single integer argument representing a number
// output is:
//   -if number is a double number, return the double number as-is
//   -else return twice the number

// rules (convert english to technical language)
// what is a double number?
// -must be of even length
// -left side digits are same as right side digits
//   I.E. split number in equal halves, see if both halves ==== each other

// data structure:
// -convert to a string to check length and compare the halves
// -output a number

// algorithm:
// -convert number to a string and check length
// -if even, length / 2 equals the end index for slice
//   for first half, use slice(0, idx);
//   for second half, use slice(idx);
//     -if the halves are the same, it's a double number (return as-is)
//     -else return twice the number
// -else return twice the number


function twice(num) {
  return isDoubleNumber(num) ? num : num * 2;
}

function isDoubleNumber(num) {
  var numString = String(num);
  var center = numString.length / 2;
  var firstHalf = numString.slice(0, center);
  var secondHalf = numString.slice(center);
  return firstHalf === secondHalf;
}

// console.log(twice(37));                 // 74
// console.log(twice(44));                 // 44
// console.log(twice(334433));             // 668866
// console.log(twice(444));                // 888
// console.log(twice(107));                // 214
// console.log(twice(103103));             // 103103
// console.log(twice(3333));               // 3333
// console.log(twice(7676));               // 7676
// console.log(twice(0));                  // 0
// console.log(twice(1));                  // 2

// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter value associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.

// function input is three integer arguments representing different grades
// output is the overall leter grade for the input (represented as a string)

function getGrade(grade1, grade2, grade3) {
  var avg = (grade1 + grade2 + grade3) / 3;

  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// console.log(getGrade(95, 90, 93)); // "A"
// console.log(getGrade(50, 50, 95)); // "D"

// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces.
// If one or more non-alphabetic characters occur in a row, you should
// only have one space in the result (the result should never have consecutive
// spaces).

// function input
// -string containing various chars
// function output
// -same string value with non-alphabetic chars replaced with spaces
    // (only one space at a time)

// rules (convert english to technical language)

// edge cases/test cases

// data structure
// -string (for regex)

// algorithm
// -use global replace with regex

function cleanUp(string) {
    return string.replace(/[^a-z]+/gi, ' ');
}

// console.log(cleanUp('---what\'s my +*& line?'));      // ' what s my line '
// console.log(cleanUp('   what\'s my +*& line?'));      // ' what s my line '
// console.log(cleanUp('-?+*& '));                       // ' '
// console.log(cleanUp(''));                             // ''

// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with st, nd, rd, or th as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901-2000 comprise
// the 20th century.

// function input
// -a number that represents a year
// function output
// -a string that represents the century of the given year

// rules (convert english to technical language):
// -output will consist of number + English suffix
// -number starts at the hundred's place of the given year
// -divide year by 100, if there's a remainder, add 1 to result

// 11th, 12th, 13th.. etc all end in 'th'
// otherwise, if the ones place is:
// 0 then 'th'
// 1 then 'st'
// 2 then 'nd'
// 3 then 'rd'
// 4-9 then 'th'

// edge cases/ test cases:

// data structure:
// -number for number part of result
// -string to determine English suffix part

// algorithm:
// -for suffix, check if has a teenths first

function century(year) {
    var cent = String(centuryNumber(year));
    return cent + centurySuffix(cent);
}

function centuryNumber(year) {
    return Math.ceil(year / 100);
}

// console.log(centuryNumber(2000));        // '20'
// console.log(centuryNumber(2001));        // '21'
// console.log(centuryNumber(5));           // '1'
// console.log(centuryNumber(11201));       // '113'

function centurySuffix(century) {
    if (century[century.length - 2] == '1') {
        return 'th';
    } else if (century[century.length - 1] == '1') {
        return 'st';
    } else if (century[century.length - 1] == '2') {
        return 'nd';
    } else if (century[century.length - 1] == '3') {
        return 'rd';
    } else {
        return 'th';
    }
}

// console.log(centurySuffix('20'));        // 'th'
// console.log(centurySuffix('21'));        // 'st'
// console.log(centurySuffix('1'));         // 'st'
// console.log(centurySuffix('2'));         // 'nd'
// console.log(centurySuffix('3'));         // 'rd'
// console.log(centurySuffix('113'));       // 'th'
// console.log(centurySuffix('11'));        // 'th'
// console.log(centurySuffix('12'));        // 'th'
// console.log(centurySuffix('25'));        // 'th'
// console.log(centurySuffix('26'));        // 'th'

// console.log(century(2000));        // '20th'
// console.log(century(2001));        // '21st'
// console.log(century(1965));        // '20th'
// console.log(century(256));         // '3rd'
// console.log(century(5));           // '1st'
// console.log(century(10103));       // '102nd'
// console.log(century(1052));        // '11th'
// console.log(century(1127));        // '12th'
// console.log(century(11201));       // '113th'
// console.log(century(0));           // '0th'
