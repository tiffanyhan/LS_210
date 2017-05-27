# 1.

backslash is used to escape the newline character at the end of each line
but on the second to last line, several spaces occur between the backslash
and the newline character.  so the newline character is not escaped which
leads to an error.

source: https://google.github.io/styleguide/javascriptguide.xml?showone=Multiline_string_literals#Multiline_string_literals

# 2.

line 7: logs 'Hello'
line 11: nothing
line 15: logs 'World'
line 19: logs '!'

# 3.

path 1: condition1
path 2: condition1 + condition2
path 3: not-condition1
path 4: not-condition1 + condition4
path 5: not-condition1 + condition4 + condition5

# 4.

logs 'Alice Bob'
logs 'Bob Bob'

# 5.

the user input must be converted from strings into integers
this can be done with parseInt.

# 6.

use .length method

# 7, 8.

function stringToSignedInteger(numberString) {
  var values = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
                '6': 6, '7': 7, '8': 8, '9': 9};
  var sum = 0;
  var stringArray = numberString.split("");
  stringArray.reverse().forEach(function(element, index) {
    if (Object.keys(values).includes(element)) {
      var n = values[element] * (10 ** index);
      sum += n;
    }
  });
  if (stringArray.slice(-1)[0] === '-') {
    console.log('last if statement ran');
    sum *= -1;
  }
  return sum;
}

# 9.

var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  var string = '';
  var remainder;

  do {
    remainder = integer % 10;
    string = DIGITS[remainder] + string;
    integer = Math.floor(integer / 10);
  } while (integer > 0);

  return string;
}

console.log(integerToString(4321));    // "4321"
console.log(integerToString(0));       // "0"
console.log(integerToString(5000));    // "5000"

10.



