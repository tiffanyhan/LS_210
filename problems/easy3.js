function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var age = randomBetween(20, 200);
// console.log('Teddy is ' + age + ' years old!');

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
    var cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleaned);
    return isPalindrome(cleaned);
}

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome('Madam, I\'m Adam'));    // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

function isPalindromicNumber(integer) {
    return isPalindrome(String(integer));
}

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// var numbers = [];

// numbers.push(prompt('Enter the 1st number: '));
// numbers.push(prompt('Enter the 2nd number: '));
// numbers.push(prompt('Enter the 3rd number: '));
// numbers.push(prompt('Enter the 4th number: '));
// numbers.push(prompt('Enter the 5th number: '));

// var lastNumber = prompt('Enter the 6th number: ');

// if (numbers.indexOf(lastNumber) > -1) {
//   console.log('The number ' + lastNumber + ' appears in [' + numbers.join(', ') + '].');
// } else {
//   console.log('The number ' + lastNumber + ' does not appear in [' + numbers.join(', ') + '].');
// }

// var age = parseInt(prompt('What is your age? '), 10);
// var retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);
// var difference = retirementAge - age;

// var today = new Date();
// var currentYear = today.getFullYear();
// var retirementYear = currentYear + difference;

// console.log('It\'s ' + String(currentYear) + '. You will retire in ' + String(retirementYear) + '.');
// console.log('You have only ' + String(difference) + ' years of work to go!');

// function input is an array of numbers
// output is an array of same length, but each element is the current "running total" of the original

// what is a running total?
// create a variable named total, initialize to 0
// for 0 index, take the value at 0 index of the original array and add it to the total
//   take the total and make it the value of the new array
// for 1 index, take the value at 1 index of the original array and add it to the total
//   take the total and make it the value of the new array
// etc.

// data structure:
// -array, use map to transform each element into the running total
// -outer variable called total is an integer

// algorithm:
// -initialize outer var total to 0
// -map: add the current element to total
// -map: return the total

function runningTotal(numbers) {
  var total = 0;

  return numbers.map(function(num) {
    return total += num;
  });
}

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []
// console.log(runningTotal([, 2, 5, 13]));           // raises error

function swap(string) {
  var words = string.split(' ');
  return words.map(swapFirstLastChars).join(' ');
}

function swapFirstLastChars(str) {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

// console.log(swap('Oh what a wonderful day it is'));    // 'hO thaw a londerfuw yad ti si'
// console.log(swap('Abcde'));                            // 'ebcdA'
// console.log(swap('a'));                                // 'a'
// console.log(swap(' '));                                // ' '

// function input is a string of space-separated words
// output is an object containing number of words as keys,
// and respective number of occurences as values

// data structure:
// an array of word strings
// return an object with string keys and integer values

// algorithm:
// split the string into an array of words
// use reduce with an initial value of {}
// for each iteration, check length of word.
// see if the String(length) is a key of the object
  // if it is, += to the value
  // else, add it as a key of the object with an initial value of 1
// return obj

function wordSizes(string) {
  var words = string.split(' ');
  var wordLetters;
  var wordLength;

  return words.reduce(function(obj, word) {
    wordLetters = word.match(/[a-z]/gi)
    wordLength = wordLetters ? wordLetters.length : 0;
    if (wordLength < 1) return obj;

    obj[wordLength] = obj[wordLength] || 0;
    obj[wordLength] += 1;
    return obj;
  }, {});
}

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4" : "1", "5": 1, "6": 1 } the period counts as part of the word
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 } the comma and ! counts as part of the word
// console.log(wordSizes('What\'s up doc?'));                             // { "6": 1, "2": 1, "4": 1 }
// console.log(wordSizes(''));                                            // {}
// console.log(wordSizes(' '));                                           // {}

// console.log(wordSizes('Four score and seven.'));                        // { "3": 1, "4": 1, "5": 2 } the period doesn't count as part of word
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));   // { "3": 5, "6": 3 } the , and ! don't count as part of the word
// console.log(wordSizes('What\'s up doc?'));                              // { "5": 1, "2": 1, "3": 1 }
// console.log(wordSizes(''));                                             // {}
// console.log(wordSizes('2234 123'));                                     // {}
