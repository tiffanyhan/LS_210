// function takes in a string argument
// returns a boolean, representing whether all characters are upcase

// what counts as all upcase?
// - all alphabetic characters must be upcase, ignore other characters

function isUppercase(string) {
  return !string.match(/[a-z]/);
}

// console.log(isUppercase('t'));          // false
// console.log(isUppercase('T'));          // true
// console.log(isUppercase('Four Score')); // false
// console.log(isUppercase('FOUR SCORE')); // true
// console.log(isUppercase('4SCORE!'));    // true
// console.log(isUppercase(''));           // true

// function takes in an array of strings
// outputs an array of same string values with vowels taken out (map with regex, replace)

function removeVowels(strings) {
  return strings.map(function(string) {
    return string.replace(/[aeiou]/gi, '');
  });
}

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));             // ['bcdfghjklmnpqrstvwxyz']
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));      // ['grn', 'YLLW', 'blck', 'wht']
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                    // ['BC', '', 'XYZ']

// function takes in a string argument
// outputs an object with 3 keys: (1) lowercase; (2) uppercase; (3) neither.

// what is lowercase/uppercase/neither?
// - lowercase/uppercase applies to alphabetic characters
// - neither applies to everything else (including whitespace)

function letterCaseCount(string) {
  var lowercaseMatches = string.match(/[a-z]/g) || [];
  var uppercaseMatches = string.match(/[A-Z]/g) || [];
  var neitherMatches = string.match(/[^a-zA-z]/g) || [];

  return {
    lowercase: lowercaseMatches.length,
    uppercase: uppercaseMatches.length,
    neither: neitherMatches.length,
  };
}

// console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));   // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));        // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));           // { lowercase: 0, uppercase: 0, neither: 0 }

// function takes in a single string argument
// outputs a new string with everything lowercase except the first character of each word

// what is a word?
// - anything that is a non-blank character (meaning non-whitespace?)

// seems like a replace
// first downcase everything
// then replace with regex the first character of each word

// also could be a transform.  would it be easier to convert to array?

function wordCap(string) {
  return string.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// console.log(wordCap('four score and seven'));    // 'Four Score And Seven'
// console.log(wordCap('the javaScript language')); // 'The Javascript Language'
// console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// function takes in a single string argument
// outputs a new string in which cases of the original string are swapped

// - uppercase letter becomes lowercase
// - lowercase letter becomes uppercase
// - non-alphabetic characters are ignored

// convert string to array of letters
// map each letter performing the transformation specified
// join back to string

function swapcase(string) {
  return string.split('').map(function(char) {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

// console.log(swapcase('CamelCase'));         // 'cAMELcASE'
// console.log(swapcase('Tonight on XYZ-TV')); // 'tONIGHT ON xyz-tv'

// function takes in a single string argument
// returns a new string with a staggered cap scheme

// what is the staggered cap scheme?
// - start with uppercase, then alternate
// - DON'T alternate on non-alphabetic characters, and don't change non-alphabetic characters

// iterate through each char,
// if the char is an alphabetic letter, toggle the case.  change case based on the toggle.
// for everything else, leave as-is.

function staggeredCase(string) {
  var uppercase = true;

  return string.split('').map(function(char) {
    if (char.match(/[a-z]/i)) {
      char =  uppercase ? char.toUpperCase() : char.toLowerCase();
      uppercase = !uppercase;
    }

    return char;
  }).join('');
}

// console.log(staggeredCase('I Love Launch School!'));     // 'I lOvE lAuNcH sChOoL!'
// console.log(staggeredCase('ALL CAPS'));                  // 'AlL cApS'
// console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 nUmBeRs'

// function takes in a single string argument
// outputs an array of strings, representing each word in the string and its length

// string output
// - contains the word, followed by a space, then a number which signifies its length

// what is a word?
// - words a separated by one blank space in the string

// split on whitespace to get an array of words
// transform each word to the string output specified above

function wordLengths(string) {
  var words = string ? string.split(' ') : [];

  return words.map(function(word) {
    return word + ' ' + String(word.length);
  });
}

// console.log(wordLengths('cow sheep chicken'));
// result
// ['cow 3', 'sheep 5', 'chicken 7']

// console.log(wordLengths('baseball hot dogs and apple pie'));
// result
// ['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

// console.log(wordLengths('It ain\'t easy, is it?'));
// result
// ['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// result
// ['Supercalifragilisticexpialidocious 34']

// console.log(wordLengths(''));
// result
// []

// function takes in a word and text as arguments
// - word is a single string argument
// - text is a long string of text
// outputs the text, which the word matches highlighted

// what is highlighted?
// - the matched word is in all caps, and has two asterisks on either side E.G. **SED**

// use global replace (replace returns a new string)

function searchWord(word, text) {
  var re = new RegExp(word, 'gi');
  var highlighted = '**' + word.toUpperCase() + '**';
  return text.replace(re, highlighted);
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

// console.log(searchWord('sed', text));
// result
// '**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
