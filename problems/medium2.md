1.

function input is a string with various letters and other chars
output is an object with properties:
  (1) lowercase - value represents percentage of lowercase chars;
  (2) uppercase - value represents percentage of uppercase chars;
  (3) neither   - value represents percentage of neither;
                  *all values are float values

rules (convert english to technical language):
lowercase letters are [a-z]
uppercase letters are [A-Z]
neither is [^A-z], and can be anything like whitespace or special chars

test cases/ edge cases:

data structure:
keep as a string to use regex

algorithm:
use string.match(re)
if matches, length = matches.length
else matches = 0;
percentage = 0 / string.length;

use a reduce?

2.

function input is three integers, each representing the length of a side
function output is a string representing the triangle classification
  'equilateral', 'isosceles', 'scalene', 'invalid'

rules (convert english to technical language):

valid triangle
-all sides must have lengths greater than 0, &&
-the sum of lengths of two shortest sides > length of longest side

equilateral
-all sides of equal length

isosceles
-two sides of equal length, and 3rd side is different length

scalene
-all sides have different lengths

edge cases/ test cases:


data structure:
an array of numbers, so that we can use sort

algorithm:
[s1, s2, s3].sort() => sides sorted from shortest to longest
check if (all sides > 0) && (sum of shorter sides > longest side)
if so, continue

if (sorted1 === sorted2 === sorted3)
  return 'equilateral'
if (sorted1 === sorted2) || (sorted2 === sorted3)
  return 'isosceles'
else
  return 'scalene'

helper functions:
validTriangle()

3.

function input are three integers representings angles of triangle
function output is a string representing the classification of the triangle

rules (convert english to technical language):

valid triangle
-all angles > 0, &&
-sum of all angles === 180

right
-one angle === 90

acute
-all angles < 90

obtuse
-one angle > 90

edge cases/ test cases:

data structure:
use an array of angles,
able to use some and every methods

algorithm:
first check if triangle is valid (helper function)
then use if else conditionals, along with some and
every methods in order to classify the triangle
(another helper function)

4.

function input is an integer representing a year
function output is an integer representing the number of
  Friday the 13ths in that year

rules (convert english to technical language):

Friday the 13th
a 13th date that also occurs on a Friday

edge cases/ test cases:

data structure:
must use built-in Date obj, for methods getDay or getDate
use integer as return value

algorithm:
var result = 0;
loop from 0 to 11
  var candidate = new Date(year, i, 13)
  if candidate.getDay() === 5
    result++;

5.

function input is an integer
function output is the next featured number greater than input

rules:

featured
-odd, &&
-multiple of 7, && (will be guaranteed by incrementation)
-digits occur only once

data structure:
-numbers, but convert to str to check for unique digits

algorithm:
-increment integer by 1 until it is a multiple of 7,
-once it is a multiple of 7, check if it's a featured number,
 if not, go to the next multiple of 7

7.


