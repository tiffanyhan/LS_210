// var a = 'outer';

// function testScope() {
//   var a = 'inner'; // variable shadowing, only this can be accessed within the function
//   console.log(a); // will output 'inner'
// }

// console.log(a); // will output 'outer'
// testScope();
// console.log(a); // will output 'outer'

// var a = 'outer';

// function testScope() {
//   a = 'inner'; // accessing outer variable and re-assigning it
//   console.log(a); // outputs 'inner'
// }

// console.log(a); // outputs 'outer'
// testScope();
// console.log(a); // outputs 'inner'

// var basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket); // outputs 'empty'

//   function shop2() {
//     basket = 'computer';
//   }

//   function shop3() {
//     var basket = 'play station'; // variable shadowing, does not re-assign the global variable
//     console.log(basket); // outputs 'play station'
//   }

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket); // outputs 'computer'
// }

// goShopping();

// function hello() {
//   a = 'hello'; // this becomes a global variable
// }

// hello();
// console.log(a); // outputs 'hello'

// function hello() {
//   var a = 'hello' // creates a local variable
// }

// hello();
// console.log(a); // reference error

// console.log(a); // outputs undefined (all variables are initialized to undefined upon declaration)

// var a = 1; // variable declaration (but not assignment) are processed first

// console.log(a); // reference error

// function hello() {
//   a = 1; // in a function scope (hoisting is scope-specific)
// }
