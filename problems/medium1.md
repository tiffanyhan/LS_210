1.

Write a function that rotates an array by moving the first element
to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array as well.
Review the test cases below and then implement the solution accordingly.

FUNCTION INPUT is an array of elements
OUTPUT is a copy of array with the first element moved to the end

RULES (convert english to technical language):
element at index 0 gets moved to last index (arr.length - 1)
all other elements get shifted to the left
  I.E. indexes are all decremented by 1

EDGE CASES/ TEST CASES
empty arr returns empty arr
if arg is not an arr, return undefined

if arr has 1 el, return value should look the same

DATA STRUCTURE:
-input is arr, and output is arr, so keep as arr

ALGORITH:
- use slice() to make a copy of the original arr
- arr.slice(1) to shift all elements to the left
- then push the first element to the end of the copy
- return copy

2.

Write a function that can rotate the last n digits of a number.
For the rotation, rotate 1 digit to the left and put the first
digit to the right.

function input: is (1) an integer;
                  (2) an integer of n rightmost digits to rotate
function output: is the number with the rotation applied to it

rules (convert english to technical language):
for the n rightmost digits, apply rotation using rotateArray
the leftmost digits stay the same

edge cases/test cases:
what if n is bigger than the length of the integer?
what if n is zero?
what if n is a negative number?

data structure:
seems we should convert the number to an array of numbers

algorithm:
convert integer to an array of numbers
inclusive startIdx: (arr.length - n)
arr.slice(startIdx), and pass it into rotateArray

exclusive endIdx: (arr.length - n)
arr.slice(0, endIdx) + result of previous function call
return

3.

If you take a number like 735291, and rotate it to the left,
you get 352917. If you now keep the first digit fixed in place,
and rotate the remaining digits, you get 329175. Keep the first
2 digits fixed in place and rotate again to get 321759. Keep the
first 3 digits fixed in place and rotate again to get 321597.
Finally, keep the first 4 digits fixed in place and rotate the
final 2 digits to get 321579. The resulting number is called
the maximum rotation of the original number.

Write a function that takes an integer as argument, and returns
the maximum rotation of that argument. You can (and probably
should) use the rotateRightmostDigits function from the previous
exercise.

function input: is an integer
function output: is an integer representing the max rotation of the input

rules (convert english to technical language):
first rotate the whole string
then rotate from idx 1 on
then rotate from idx 2 on
etc.
continue until at last idx

edge cases/ test cases:
what if the number is negative?

data structure:
convert num to str or arr again

algorithm:
convert num to str
str.slice(0), pass this into rotateString
  add to final result string rotated.slice(0, 1)
  re-assign toRotate = rotated.slice(1);

using rotateRightmostDigits:
numStr, n = numStr.length

4.

function input is a string of space separated words and numbers
function output is a number representing the register value,
  if the PRINT command was given (else nothing returned)

rules (convert english to technical language):
stack is []
register is a number, initialized to 0

all operations are on: (1) the last value in the stack arr;
                       (2) the register value

n: any number means put it in the register
ADD, SUB, MULT, DIV, MOD: all pop last value from stack,
                          and use register as the other value.
                          the result becomes the new register value.
                          (DIV performs integer division)

ADD: register = register * stack
SUB: register = register - stack
MULT: register = register * stack
DIV: register = Math.floor(register / stack)
MOD: register = register / stack

PUSH: push register value onto stack (and leave register value as-is)
POP: remove last value from stack and put in register
PRINT: print register value

edge cases/ test cases:

data structure/ algorithm:
split string arg on ' ' to get a list of commands
iterate through each command and execute it
use if-else statements for logic of commands

5.

Write a function that takes a sentence string as input and returns
a new string that contains the original string with any sequence
of the words 'zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine' converted to a string of digits.

function input as a string that contains number words in english
function output is same string but with number words replaced with its int

rules (convert english to technical language):
'one'   => '1'
'two'   => '2'
'three' => '3'
'four'  => '4'
'five'  => '5'
'six'   => '6'
'seven' => '7'
'eight' => '8'
'nine'  => '9'

edge cases/ test cases:

data structure:
keep as string in order to use global replace with regex

algorithm:
var ENGLISH_NUMBERS = ['zero', 'one', 'two', 'three', etc.]
iterate through each english number,
construct a regex from it
if there's a match, perform a replace.
substitute is String(ENGLISH_NUMBERS.indexOf(currentNumber));

6.

function input is n, which represents the idx (starting from 1) of target
    Fib number
output is what the Fib number is at that idx

rules (convert english to technical language)
idx 1: return 1
idx 2: return 1
idx 3, etc: (3-1) + (3-2)

edge cases / test cases

data structure:
numbers

algorithm:
if input is 1 or 2
    return 1
if input > 2
    return fibonacci(input - 1) + fibonacci(input - 2)

7.

algorithm:
var first = 1;
var second = 1;
var sum;

for loop i = 3 to n
    sum = first + second;
    first = second;
    second = sum;

8.


