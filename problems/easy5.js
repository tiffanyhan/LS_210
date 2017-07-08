function repeater(string) {
  return string.split('').map(function(char) {
    return char.repeat(2);
  }).join('');

  // var doubled = ''
  // for (var i = 0; i < string.length; i++) {
  //   doubled += string[i].repeat(2);
  // }
  // return doubled;
}

// console.log(repeater('Hello'));     // "HHeelllloo"
// console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
// console.log(repeater(''));          // ''

function doubleConsonants(string) {
  return string.split('').map(function(char) {
    char = isConsonant(char) ? char.repeat(2) : char;
    return char;
  }).join('');
}

function isConsonant(char) {
  var consonantsRe = /[bcdfghjklmnpqrstvwxyz]/gi;
  return consonantsRe.test(char);
}

// console.log(isConsonant('g')); // true
// console.log(isConsonant('G')); // true
// console.log(isConsonant('b')); // true
// console.log(isConsonant('o')); // false
// console.log(isConsonant(' ')); // false

// console.log(doubleConsonants('String'));       // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));     // "JJullyy 4tthh"
// console.log(doubleConsonants(''));             // ""

function reversedNumber(num) {
  var numStringArr = String(num).split('');
  return Number(numStringArr.reverse().join(''));

  // var numberStringArray = String(number).split('');
  // console.log(numberStringArray.reverse());
  // return parseInt(numberStringArray.reverse().join(''), 10);
}

// console.log(reversedNumber(12345));    // 54321
// console.log(reversedNumber(12213));    // 31221
// console.log(reversedNumber(456));      // 654
// console.log(reversedNumber(12000));    // 21 # Note that zeros get dropped!
// console.log(reversedNumber(1));        // 1
// console.log(reversedNumber(0));        // 0
// console.log(reversedNumber(10));       // 1
// console.log(reversedNumber(001));      // 1

// Math.floor(length / 2) equals index of center FOR ODD,
  // and second index of center FOR EVEN.

function centerOf(string) {
  if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substr((string.length / 2) - 1, 2);
  }
}

// console.log(centerOf('I love ruby'));    // 'e'
// console.log(centerOf('Launch School'));  // ' '
// console.log(centerOf('Launch'));         // 'un'
// console.log(centerOf('Launchschool'));   // 'hs'
// console.log(centerOf('x'));              // 'x'
// console.log(centerOf(''));               // ''
// console.log(centerOf(' '));              // ' '

function negative(num) {
  return Math.abs(num) * -1;
}

// console.log(negative(5))  // -5
// console.log(negative(-3)) // -3
// console.log(negative(0))  // -0

function sequence(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}

// console.log(sequence(5)); // [1, 2, 3, 4, 5]
// console.log(sequence(3)); // [1, 2, 3]
// console.log(sequence(1)); // [1]

function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

// console.log(swapName('Joe Roberts')); // 'Roberts, Joe'

// function input is an integer representing the number of items
//   and an integer representing the first number of the sequence
// output is an array of numbers of that sequence

// what is a multiple?
// multiples computed by multiplying 1,2,3..etc by the num

// data structure:
// will be an array to be returned,
// number arguments used for looping

// algorithm:
// from 1 to length:
//   -multiply i by first, in order to get the multiple
//   -push to array
// -return array

function sequence(length, first) {
  var multiples = [];
  for (var i = 1; i <= length; i++) {
    multiples.push(first * i);
  }

  return multiples;
}

// console.log(sequence(5, 1));       // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));      // [-7, -14, -21, -28]
// console.log(sequence(3, 0));       // [0, 0, 0]
// console.log(sequence(0, 1000000)); // []
// console.log(sequence(1, 1000000)); // [1000000]

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// console.log(reverseSentence(''));                     // ''
// console.log(reverseSentence('Hello World'));          // 'World Hello'
// console.log(reverseSentence('Reverse these words'));  // 'words these Reverse'

function reverseWords(string) {
  var words = string.split(' ');

  return words.map(function(word) {
    if (isAtLeastFiveLetter(word)) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

function isAtLeastFiveLetter(word) {
  var re = /\b[a-z]{5,}\b/i;
  return re.test(word);
}

// console.log(reverseWords('Professional'));          // lanoisseforP
// console.log(reverseWords('Walk round the block'));  // Walk dnuor the kcolb
// console.log(reverseWords('Launch School'));         // hcnuaL loohcS
// console.log(reverseWords('Lunch School'));          // hcnuL loohcS
