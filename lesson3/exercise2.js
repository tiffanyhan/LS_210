// function generatePattern(n) {
//   var line;

//   for (var i = 1; i <= n; i++) {
//     line = ''

//     for (var j = 1; j <= i; j++) {
//       line += String(j);
//     }

//     for (var k = n - i; k > 0; k--) {
//       line += '*';
//     }

//     console.log(line);
//   }
// }

// generatePattern(10);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = 0; i <= limit; i++) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf('Some strings', 's'));      // 5
// console.log(indexOf('Blue Whale', 'Whale'));    // 5
// console.log(indexOf('Blue Whale', 'Blute'));    // -1
// console.log(indexOf('Blue Whale', 'leB'));      // -1

// console.log(lastIndexOf('Some strings', 's'));                  // 11
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

function trimLeft(string) {
  var newString = '';
  var copyMode = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[i];
    }
  }

  return newString;
}

function trimRight(string) {
  var newString = '';
  var copyMode = false;

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[i] + newString;
    }
  }

  return newString;
}

function trim(string) {
  var trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

// console.log(trim('  abc  '));  // "abc"
// console.log(trim('abc   '));   // "abc"
// console.log(trim(' ab c'));    // "ab c"
// console.log(trim(' a b  c'));  // "a b  c"
// console.log(trim('      '));   // ""
// console.log(trim(''));         // ""

function splitString(string, delimiter) {
  if (typeof delimiter === 'undefined') {
    console.log('ERROR: No delimiter');
    return;
  }

  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}

// splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

// splitString('hello');
// logs:
// ERROR: No delimiter

// splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

// splitString('hello', ';');
// logs:
// hello

// splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

function repeat(string, times) {
  var repeated = '';

  if (times < 0 || isNaN(times)) {
    return;
  }

  for (var i = 0; i < times; i++) {
    repeated += string;
  }

  return repeated;
}

// console.log(repeat('abc', 1));    // "abc"
// console.log(repeat('abc', 2));    // "abcabc"
// console.log(repeat('abc', -1));   // undefined
// console.log(repeat('abc', 0));    // ""
// console.log(repeat('abc', 'a'));  // undefined

function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

// var str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));       // true
// console.log(startsWith(str, 'We put'));   // true
// console.log(startsWith(str, ''));         // true
// console.log(startsWith(str, 'put'));      // false

// var longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));      //

function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var result = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

// console.log(toLowerCase('ALPHABET'));      // "alphabet"
// console.log(toLowerCase('123'));           // "123"
// console.log(toLowerCase('abcDEF'));        // "abcdef"

function substr(string, start, length) {
  var substring = '';
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;

    if (typeof string[index] === 'undefined') {
      break;
    }

    substring += string[index];
  }

  return substring;
}

// var string = 'hello world';
// console.log(substr(string, 2, 5));     // "llo "
// console.log(substr(string, -3, 2));    // "rl"
// console.log(substr(string, 8, 20));    // "rld"
// console.log(substr(string, 0, -20));   // ""
// console.log(substr(string, 0, 0));     // ""

function substring(string, start, end) {
  var result = '';
  var temp;

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (end === undefined) { end = string.length; }

  if (start < 0 || isNaN(start)) { start = 0; }
  if (end < 0 || isNaN(end)) { end = 0; }

  if (start > string.length) { start = string.length; }
  if (end > string.length) { end = string.length; }

  for (var i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}

// var string = 'hello world';
// console.log(substring(string, 2, 4));    // "ll"
// console.log(substring(string, 4, 2));    // "ll"
// console.log(substring(string, 0, -1));   // ""
// console.log(substring(string, 2));       // "llo world"
// console.log(substring(string, 'a'));     // "hello world"
// console.log(substring(string, 8, 20));   // "rld"
