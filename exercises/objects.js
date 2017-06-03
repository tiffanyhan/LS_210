var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};
// console.log(myObject[1]); // anything within the square brackets gets implicitly coerced into a string
// console.log(myObject['a']);
// console.log(myObject.a);

var person = {
  firstName: function() {
    return 'Victor';
  },
  lastName: function() {
    return 'Reyes';
  },
};

// console.log(person.firstName() + ' ' + person.lastName()); // methods aren't invoked.
// the actual function definition will get printed out

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]); // array1[i] seems to be like a variable pointing to an immutable, so it's pass by value
}

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

// console.log(array2);

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

// console.log(myObject[prop2]); // 678
// console.log(myObject.prop2); // 456

var myObj = {};
myObj[myFunc()] = 'hello, ';
function myFunc() {
  return 'funcProp';
}

// console.log(myObj); // { funcProp: 'hello, ' }
// myObj[myFunc()] = 'world!';
// console.log(myObj); // { funcProp: 'world!' }

var myArray = ['a', 'b', 'c'];
// console.log(myArray[0]); // 'a'
// console.log(myArray[-1]); // undefined
myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

// console.log(myArray[-1]); // 'd'
// console.log(myArray['e']); // 5
// console.log(myArray); // ['a', 'b', 'c', 'f']
// console.log(myArray.length);

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

// console.log(average(myArray)); // 10

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// console.log(calculateBonus(2800, true));      // 1400
// console.log(calculateBonus(1000, false));     // 0
// console.log(calculateBonus(50000, true));     // 25000

// console.log(penultimate('last word'));               // 'last'
// console.log(penultimate('Launch School is great!')); // 'is'

function penultimate(string) {
  // return string.split(' ')[-2]; // returns undefined bc arrays are objects, and if you try to access a key that's not in the object you get undefined
  var words = string.split(' ');
  return words[words.length - 2];
}

var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) { // deltaMinutes represents the number of minutes away from midnight
  var midnight = new Date('1/1/2000 00:00'); // choose any day, 00:00 is midnight
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE); // getTime returns milliseconds
  var hours = padWithZeroes(afterMidnight.getHours(), 2); // returns 0 to 23
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2); // returns 0 to 59

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// console.log(timeOfDay(0));       // "00:00"
// console.log(timeOfDay(-3));      // "23:57"
// console.log(timeOfDay(35));      // "00:35"
// console.log(timeOfDay(-1437));   // "00:03"
// console.log(timeOfDay(3000));    // "02:00"
// console.log(timeOfDay(800));     // "13:20"
// console.log(timeOfDay(-4231));   // "01:29"

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  var midnight = new Date(DATE_PART + ' 00:00');
  var after = new Date(DATE_PART + ' ' + timeStr);

  return (after.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight('00:00'));        // 0
console.log(beforeMidnight('00:00'));       // 0
console.log(afterMidnight('12:34'));        // 754
console.log(beforeMidnight('12:34'));       // 686
