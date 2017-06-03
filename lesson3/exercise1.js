function logOddNumbers(limit) {
  for (var i = 1; i <= limit; i += 2) {
    console.log(i);
  }
}

// logOddNumbers(19);

//output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

function multiplesOfThreeAndFive() {
  for (var i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

// multiplesOfThreeAndFive();

// output on console
// 3
// 5
// 6
// 9
// 10
// 12
// 15!
// ... remainder of output omitted for brevity

function logMultiples(number) {
  for (var i = 100; i >= 0; i--) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

// logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

// logMultiples(21);
// output (3x and 1x)
// 63
// 21

function fizzbuzz() {
  var message;

  for (var i = 1; i <= 100; i++) {
    message = '';

    if (i % 3 === 0) {
      message += 'Fizz';
    }

    if (i % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}

// fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
//... rest of output omitted for brevity

function isPrime(number) {
  if (number <= 1) return false;

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(1));  // false
// console.log(isPrime(2));  // true
// console.log(isPrime(3));  // true
// console.log(isPrime(43)); // true
// console.log(isPrime(55)); // false
// console.log(isPrime(0));  // false

function isXor(bool1, bool2) {
  return !!((bool1 && !bool2) || (!bool1 && bool2));
}

// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false


// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
// console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false

// var password = 'password';
// var failedAttempts = 0;

// while (true) {
//   var guess = prompt('What is the password:');

//   if (guess === password) {
//     console.log('You have successfully logged in.');
//     break;
//   }

//   failedAttempts++;

//   if (failedAttempts === 3) {
//     console.log('You have been denied access.');
//     break;
//   }
// }

// var score1 = Number(prompt('Enter score 1:'))
// var score2 = Number(prompt('Enter score 2:'))
// var score3 = Number(prompt('Enter score 3:'))

// var total = score1 + score2 + score3;
// var average = total / 3;

// var grade;
// if (average >= 90) {
//   grade = 'A';
// } else if (average >= 70) {
//   grade = 'B';
// } else if (average >= 50) {
//   grade = 'C';
// } else {
//   grade = 'F';
// }

// console.log('Based on the average of your 3 scores your letter grade is "' +
//             grade +'".');

function gcd(num1, num2) {
  while (num2 !== 0) {
    var temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

// console.log(gcd(12, 4));   // 4
// console.log(gcd(15, 10));  // 5
// console.log(gcd(9, 2));    // 1

function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  for (var i = 2; i <= n / 2; i++) {
    if (isPrime(i) && isPrime(n - i)) {
      console.log(i, n - i);
    }
  }
}

// checkGoldbach(3);
// // logs: null

// checkGoldbach(4);
// // logs: 2 2

// checkGoldbach(12);
// // logs: 5 7

// checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
