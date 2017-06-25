// function takes in an array of integers from 0 to 19
// outputs an array (new?) of the integers sorted based on english words

// use sort
// seems like you would need an array of the english words
// each integer can also be the index to access the english word

function alphabeticNumberSort(integers) {
  var ENGLISH = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  var sorted = integers.slice().sort(function(intA, intB) {
    if (ENGLISH[intA] < ENGLISH[intB]) {
      return -1;
    } else if (ENGLISH[intA] > ENGLISH[intB]) {
      return 1;
    } else {
      return 0;
    }
  })

  return sorted;
}

// console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                                   11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function takes in a positive integer
// outputs the sum of each digit of the integer

// using list processing techniques:
// turn integer into a string and then into an array
// reduce that array to get the sum
// convert back to integer

function sum(integer) {
  var stringDigits = String(integer).split('');
  var sum = stringDigits.reduce(function(sum, stringDigit) {
    return sum + parseInt(stringDigit, 10);
  }, 0);
  return sum;
}

// console.log(sum(23));          // 5
// console.log(sum(496));         // 19
// console.log(sum(123456789));   // 45

// function takes in two arrays of numbers
// outputs a new array that contains the product of every pair possible btwn the two arrays
// the new array is sorted from smallest to biggest number

// what is the product of every pair possible btwn the two arrays?
// - the new array's length will be array1's length times array2's length
// - for each item in array1, iterate through all the items in array2 (map?)

function multiplyAllPairs(array1, array2) {
  var multipliedPairs = [];

  array1.forEach(function(complement1) {
    array2.forEach(function(complement2) {
      multipliedPairs.push(complement1 * complement2);
    })
  });

  return multipliedPairs.sort(function(a, b) {
    return a - b;
  });
}

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// function takes in an array of numbers
// outputs one number, which is the sum of sums of each leading subsequence of the array

// what is the sum of sums of each leading subsequence of the array?
// sum of each leading subsequence, is that number plus everything before it added up (map)
// sum of sums is all of those added up (reduce)

function sumOfSums(numbers) {
  return numbers.map(function(number, index) {
    return numbers.slice(0, index + 1).reduce(function(sum, number) {
      return sum + number;
    });
  }).reduce(function(sum, subSum) {
    return sum + subSum;
  });
}

// console.log(sumOfSums([3, 5, 2]));       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
// console.log(sumOfSums([1, 5, 7, 3]));    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
// console.log(sumOfSums([4]));             // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// function takes in a string
// outputs a (new) array of all substrings in that string, which start from the first character (sorted from shortest to longest)

// how to get all substrings which start from the first character in the string?
// turn string into an array
// - use map to transform each char in the string into a substring
// - substring includes the current char plus everything before it (use slice)

function substringsAtStart(string) {
  return string.split('').map(function(character, index) {
    return string.slice(0, index + 1);
  });
}

// console.log(substringsAtStart('abc'));   // ['a', 'ab', 'abc']
// console.log(substringsAtStart('a'));     // ['a']
// console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// function takes in a string
// outputs a new array of all substrings in that string (sort by position and length)

// what are all substrings of a string?
// a substring includes the current char plus everything before it up to the current position (use slice)

// how to use substringsAtStart ?
// we want to pass in the entire string, then remove the leading character, pass it in again, etc.

function substrings(string) {
  return string.split('').map(function(char, index) {
    return substringsAtStart(string.substr(index));
  }).reduce(function(finalArray, array) {
    return finalArray.concat(array);
  });
}

// console.log(substrings('abcde'));
// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]

// function takes in a string
// outputs an array of all palindromic substrings of the string
// - sorted in the order found
// - don't worry about duplicates

// what is a palindrome?
// a palindrome reads the same forwards as it does backwards
// - all characters count, even special characters
// - case DOES count
// - single characters are NOT palindromes

// approach?
// use substrings function and then select palindromic ones (filter)
// - filter out single character substrings first, then check if palindromic

function isPalindrome(string) {
  reversedString = string.split('').reverse().join('');
  return string.length > 1 && string === reversedString;
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

// console.log(palindromes('abcd'));  // []
// console.log(palindromes('madam')); // ['madam', 'ada']
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
//   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
//   '-madam-', 'madam', 'ada', 'oo' ]

// console.log(palindromes('knitting cassettes'));
// result
// [ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]

// function takes in an array of arrays, listing the fruit and its # of occurences
// - first item of the array is a string, which is the name of the fruit
// - second item is an integer, representing the fruit's number of occurences

// output is an array of strings, each string is a name of a fruit

// transform each array to an array of strings repeated that many times (map)
// reduce all arrays into one array, use concat (reduce)

function repeat(itemQuantity) {
  var repeated = [];
  var item = itemQuantity[0];
  var quantity = itemQuantity[1];

  for (var i = 0; i < quantity; i++) {
    repeated.push(item);
  }

  return repeated;
}

function buyFruit(fruitQuantities) {
  return fruitQuantities.map(function(fruitQuantity) {
    return repeat(fruitQuantity);
  }).reduce(function(prevArray, array) {
    return prevArray.concat(array);
  });
}

// console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));
// result
// ['apples', 'orange', 'apples', 'apples', 'bananas','bananas']

// function takes in 2 arguments: id number for the item, and an array of transactions
// each transaction is represented by an obj, with key values for id, movement, and quantity
// output is an array of transactions that only pertain to the item specified

// looks like a filter
// filter the array based on the item requested

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === inventoryItem;
  });
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

// console.log(transactionsFor(101, transactions));
// result
// [ { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 101, movement: 'out', quantity: 18 }, ]

// function takes in an array of transactions
// outputs a boolean, representing whether the item is available
// - true if the total is greater than zero, false otherwise

// movement in means add the number
// movement out means subtract the number

// reduce the filtered transactions to a sum? (reduce)

function isItemAvailable(inventoryItem, transactions) {
  var filtered = transactionsFor(inventoryItem, transactions);

  var quantity = filtered.reduce(function(sum, transaction) {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else if (transaction.movement === 'out') {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

// console.log(isItemAvailable(101, transactions)); // false
// console.log(isItemAvailable(105, transactions)); // true
