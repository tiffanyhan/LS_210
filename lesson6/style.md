1.

var title = 'The Three-Body Problem';

use single quotes for strings.

2.

var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;

each variable declaration should have its own line.
variable names should be in camelCase

3.

var completed = lastPageRead === 400;

use === rather than ==.

4.

if (finishedBook()) {
  console.log('You have finished reading this book');
}

if (finishedBook()) console.log('You have finished reading this book');

use one line or put curly braces.

5.

function read(pages) {
  var i;
  var message;

  console.log('You started reading.');
  for (i = 0; i < pages; i += 1) {
    message = 'You read page ' + i;
    console.log(message);
  }
}

read(400);

indentation should be set to 2 spaces.
avoid using unary increments and decrements.
should be spaces between operators.
all variables should be declared at the top of the function.