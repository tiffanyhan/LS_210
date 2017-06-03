function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// will count 0 as undefined value

var person = {name: 'Victor'};
var otherPerson = {name: 'Victor'};

// console.log(person === otherPerson);  // object comparison checks if it's the same object

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function(item, quantity) {
  return startingBalance + (item * quantity); // _ + (35)
}

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 45

// doubler(5, 'Victor');       // 10
// This function was called by Victor.

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  };
}

// var doubler = makeDoubler('Victor');
// doubler(5);                 // 10
// This function was called by Victor.

// var arr = ['Apples', 'Peaches', 'Grapes'];

// arr[3.4] = 'Oranges';
// console.log(arr.length); // 3
// console.log(Object.keys(arr).length); // 4

// arr[-2] = 'Watermelon';
// console.log(arr.length); // 3
// console.log(Object.keys(arr).length); // 5

// var languages = ['JavaScript', 'Ruby', 'Python'];
// console.log(languages); // ['JavaScript', 'Ruby', 'Python']
// console.log(languages.length); // 3

// languages.length = 4;
// console.log(languages); // ['JavaScript', 'Ruby', 'Python', ];
// console.log(languages.length); // 4

// languages.length = 1;
// console.log(languages); // ['Javascript']
// console.log(languages.length); // 1

// languages.length = 3;
// console.log(languages); // ['Javascript', , ]
// console.log(languages.length); // 3

// languages.length = 1;
// languages[2] = 'Python';
// console.log(languages); // ['JavaScript', , 'Python', ];
// console.log(languages[1]); // undefined
// console.log(languages.length); // 3

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32)); // Welcome\s
    anotherOne(116, 111, 32); // to\s
  }

  anotherAnotherOne(); // Welcome to\s
  anotherOne(116, 104, 101, 32); // the\s
  return anotherOne;
}

// one()(77, 97, 116, 114, 105, 120, 33); // Welcome to the Matrix!
