function rotateArray(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));   // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));      // ['b', 'c', 'a']
// console.log(rotateArray(['a']));                // ['a']
// console.log(rotateArray([1, 'a', 3, 'c']));     // [ 'a', 3, 'c', 1 ]
// console.log(rotateArray([{a: 2}, [1, 2], 3]));  // [ [1, 2], 3, {a: 2} ]

// return an empty arr if input is empty arr
// console.log(rotateArray([]));                   // []
// return undefined if the argument is not an array
// console.log(rotateArray());                    // undefined
// console.log(rotateArray(1));                   // undefined


// the input array is not mutated
// var x = [1, 2, 3, 4];
// console.log(rotateArray(x));                  // [2, 3, 4, 1]
// console.log(x);                               // [1, 2, 3, 4]

function rotateRightmostDigits(num, n) {
  var numStr = String(num);
  var rotated = rotateString(numStr.slice(numStr.length - n));
  var unrotated = numStr.slice(0, numStr.length - n);
  return Number(unrotated + rotated);
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

// console.log(rotateRightmostDigits(735291, 0)); // 735291
// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// [7,3,5,2,9,1]
//  0 1 2 3 4 5 (length 6)
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
// console.log(rotateRightmostDigits(735291, 6)); // 352917

function maxRotation(num) {
  for (var i = String(num).length; i >= 2; i--) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
}

// console.log(maxRotation(735291));        // 321579
// '735291'
// rotateRightmostDigits(numStr, n = 6) => '352917'
// numStr = '352917'
// rotateRightmostDigits(numStr, n = 5) => '329175'
// numStr = '329175'
// rotateRightmostDigits(numStr, n = 4) => '321759'
// numStr = '321759'
// rotateRightmostDigits(numStr, n = 3) => '321597'
// numStr = '321597'
// rotateRightmostDigits(numStr, n = 2) => '321579'
// numStr = '321579'

// console.log(maxRotation(3));             // 3
// console.log(maxRotation(35));            // 53
// console.log(maxRotation(105));           // 15 # the leading zero gets dropped
// console.log(maxRotation(8703529146));    // 7321609845

function minilang(string) {
  var commands = string.split(' ');
  var stack = [];
  var register = 0;

  commands.forEach(function(command) {
    if (/\d+/.test(command)) {
      register = parseInt(command, 10);
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (command === 'ADD') {
      register += stack.pop();
    } else if (command === 'SUB') {
      register -= stack.pop();
    } else if (command === 'MULT') {
      register *= stack.pop();
    } else if (command === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (command === 'MOD') {
      register %= stack.pop();
    }
  });
}

// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT ');
// 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT ');
// 12

// minilang('-3 PUSH 5 SUB PRINT');
// 8

// minilang('6 PUSH');
// (nothing printed; no PRINT commands)

function wordToDigit(string) {
  var english = ['zero', 'one', 'two', 'three', 'four', 'five',
                 'six', 'seven', 'eight', 'nine', 'ten'];
  var re;
  english.forEach(function(word, idx) {
    re = new RegExp(word, 'g');
    string = string.replace(re, String(idx));
  });

  return string;
}

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
//'Please call me at 5 5 5 1 2 3 4. Thanks.'

function fibonacci(int) {
  if (int === 1 || int === 2) {
    return 1;
  } else if (int > 2) {
    return fibonacci(int - 1) + fibonacci(int - 2);
  }
}

// console.log(fibonnaci(0));   // undefined
// console.log(fibonacci(1));   // 1
// console.log(fibonacci(2));   // 1
// console.log(fibonacci(3));   // 2
// console.log(fibonacci(4));   // 3
// console.log(fibonacci(5));   // 5
// fibonacci(4) +                               fibonacci(3);
// fibonacci(3) +                fibonacci(2) + fibonacci(2) + fibonacci(1)
// fibonacci(2) + fibonacci(1)   1              1              1
// 1              1
// console.log(fibonacci(12));  // 144
// console.log(fibonacci(20));  // 6765

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        var first = 1;
        var second = 1;
        var sum;
        for (var i = 3; i <= n; i++) {
            sum = first + second;
            first = second;
            second = sum;
        }
        return sum;
    }
}

// console.log(fibonacci(5));   // 5
// first = 1, second = 1
// idx 3: sum = 2; first = 1; second = 2;
// idx 4: sum = 3; first = 2; second = 3;
// idx 5: sum = 5; first = 3; second = 5;
// console.log(fibonacci(20));   // 6765
// console.log(fibonacci(50));   // 12586269025
// console.log(fibonacci(100));  // 354224848179261915075 discrepancy

var memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    if (memo[nth]) {
      return memo[nth];
    } else {
      memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
      return memo[nth];
    }
  }
}

var fibVal = {1: 1, 2: 1};
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    var sum = fibonacci(n - 1) + fibVal[n - 2];
    fibVal[n] = sum;
    return sum;
  }
}
