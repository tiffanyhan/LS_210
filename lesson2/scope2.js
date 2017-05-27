// function say() {
//   if (false) {
//     var a = 'hello from inside a block'; // does not create a new scope
//   }

//   console.log(a); // logs undefined
// }
// say();

// function hello() {
//   a = 'hello'; // re-assigns the hoisted variable declaration in the if block
//   console.log(a); // logs 'hello'

//   if (false) {
//     var a = 'hello again'; // this declaration is hoisted to the top of the function scope
//   }
// }

// hello();
// console.log(a); // reference error

// var a;
// var i;
// a = 'hello';
// i = 0;
// a = i;

// var a = 'hello';

// for (var i = 0; i < 5; i++) {
//   var a = i;
// }

// console.log(a); // outputs 4

// var a = 1;

// function foo() {
//   a = 2; // global variable re-assigned to 2
//   function bar() {
//     a = 3; // global variable re-assigned to 3
//     return 4;
//   }

//   return bar();
// }

// console.log(foo()); // outputs 4
// console.log(a); // outputs 3

// a = 'global' // creates a global variable

// function checkScope() {
//   var a = 'local'; // another local variable (shadowing)
//   function nested() {
//     var a = 'nested'; // yet another local variable (shadowing)
//     function supernested() {
//       a = 'supernested'; // re-assigned the nested local variable
//       return a;
//     }

//     return supernested();
//   }

//   return nested();
// }

// console.log(checkScope()); // outputs supernested
// console.log(a); // outputs global

// var a = 'outer';
// var b = 'outer';

// console.log(a); // logs outer
// console.log(b); // logs outer
// setScope(a); // works bc the function declaration (including function body) is hoisted to top of scope
// console.log(a); // logs outer
// console.log(b); // logs inner

// function setScope(foo) {
//   foo = 'inner'; // re-assigns the local variable foo to 'inner'
//   b = 'inner'; // re-assigns the global variable b
// }

// var total = 50; // global variable
// var increment = 15; // global variable

// function incrementBy(increment) {
//   total += increment; // the local variable increment is assigned to the value passed in at invocation time
// }

// console.log(total); // outputs 50
// incrementBy(10);
// console.log(total); // outputs 60
// console.log(increment); // outputs 15

// var setScope;

// var a = 'outer'; // global variable

// console.log(a); // outputs 'outer'
// setScope(); // type error
// console.log(a);

// // setScope = function() {
// //
// // }
// var setScope = function() {
//   a = 'inner';
// }
