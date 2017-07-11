function letterPercentages(string) {
  var count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

// console.log(letterPercentages('abCdef 123')); // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
// console.log(letterPercentages('AbCd +Ef'));   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
// console.log(letterPercentages('123'));        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }
// console.log(letterPercentages('12  3!?&^'));  // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }

// function triangle(s1, s2, s3) {
//   var sorted = [s1, s2, s3].sort((a, b) => a - b);
//   var shortest = sorted[0];
//   var middle = sorted[1];
//   var longest = sorted[2];

//   if (!validTriangle) return 'invalid';
//   return getTriangleType(shortest, middle, longest);
// }

// function validTriangle(shortest, middle, longest) {
//   return shortest > 0 && shortest + middle > longest;
// }

// function getTriangleType(shortest, middle, longest) {
//   if (shortest === middle && middle === longest)
//     return 'equilateral';
//   else if (shortest === middle || middle === longest)
//     return 'isosceles';
//   else
//     return 'scalene';
// }

// console.log(triangle(3, 3, 3));   // equilateral
// console.log(triangle(3, 3, 1.5)); // isosceles
// console.log(triangle(3, 4, 5));   // scalene
// console.log(triangle(0, 3, 3));   // invalid
// console.log(triangle(3, 1, 1));   // invalid

function triangle(a1, a2, a3) {
  var angles = [a1, a2, a3];
  if (!validTriangle(angles)) return 'invalid';
  return getTriangleType(angles);
}

function validTriangle(angles) {
  return angles.every(a => a > 0) &&
         angles.reduce((sum, a) => sum + a) === 180;
}

// console.log(validTriangle([60, 70, 50]));   // valid
// console.log(validTriangle([30, 90, 60]));   // valid
// console.log(validTriangle([120, 50, 10]));  // valid
// console.log(validTriangle([0, 90, 90]));    // invalid
// console.log(validTriangle([50, 50, 50]));   // invalid

function getTriangleType(angles) {
  if (angles.some(a => a === 90))
    return 'right';
  else if (angles.some(a => a > 90))
    return 'obtuse';
  else if (angles.every(a => a < 90))
    return 'acute';
}

// console.log(triangle(60, 70, 50));   // acute
// console.log(triangle(30, 90, 60));   // right
// console.log(triangle(120, 50, 10));  // obtuse
// console.log(triangle(0, 90, 90));    // invalid
// console.log(triangle(50, 50, 50));   // invalid

function fridayThe13ths(year) {
  var result = 0;
  var candidate;

  for (var i = 0; i <= 11; i++) {
    candidate = new Date(year, i, 13);
    if (candidate.getDay() === 5)
      result++;
  }

  return result;
}

// console.log(fridayThe13ths(2015)); // 3
// newDate(year, 0, 13)
// newDate(year, 1, 13)
// newDate(year, 2, 13)
// etc.
// newDate(year, 11, 13)

// console.log(fridayThe13ths(1986)) // 1

function featured(integer) {
  var MAX_FEATURED = 9876543210;
  var featuredInt = toOddMultipleOfSeven(integer);

  while (featuredInt < MAX_FEATURED) {
    if (uniqueChars(String(featuredInt))) {
      return featuredInt;
    }

    featuredInt += 14;
  }

  return 'There is no possible number that fulfills those requirements';
}

function toOddMultipleOfSeven(integer) {
  do {
    integer++;
  } while (integer % 2 !== 1 || integer % 7 !== 0);

  return integer;
}

// console.log(toOddMultipleOfSeven(12)); // 21
// console.log(toOddMultipleOfSeven(21)); // 35

function uniqueChars(string) {
  var re;
  var matches;

  for (var i = 0; i < string.length; i++) {
    re = new RegExp(string[i], 'g');
    matches = string.match(re).length;
    if (matches > 1)
      return false;
  }

  return true;
}

// console.log();
// console.log(uniqueChars('7'));              //true
// console.log(uniqueChars('77'));             //false
// console.log(uniqueChars('49'));             //true
// console.log(uniqueChars('1234567890'));     //true
// console.log(uniqueChars('1234567291'));     //false
// console.log(uniqueChars('1234554321'));     //false
// console.log(uniqueChars('125537'));         //false

// console.log(featured(12));        // 21
// console.log(featured(20));        // 21
// console.log(featured(21));        // 35
// console.log(featured(997));       // 1029
// console.log(featured(1029));      // 1043
// console.log(featured(999999));    // 1023547
// console.log(featured(999999987)); // 1023456987

function sumSquareDifference(n) {
  var integers = [];
  for (var i = 1; i <= n; i++) {
    integers.push(i);
  }
  return squareOfSums(integers) - sumOfSquares(integers);
}

function squareOfSums(integers) {
  return Math.pow(integers.reduce((sum, int) => sum + int), 2);
}

function sumOfSquares(integers) {
  return integers.map(int => Math.pow(int, 2))
                 .reduce((sum, square) => sum + square);
}

// console.log(sumSquareDifference(3));    // 22
// -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));   // 2640
// console.log(sumSquareDifference(1));    // 0
// console.log(sumSquareDifference(100));  // 25164150

function bubbleSort(array) {
  var swapped;
  while (true) {
    swapped = false;

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        exchange(array, i, i + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
}

function exchange(array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

var array = [5, 3];
bubbleSort(array);
// console.log(array);     // [3, 5]

array = [6, 2, 7, 1, 4]
bubbleSort(array);
// console.log(array);     // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
// console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
