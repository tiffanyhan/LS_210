// what is a valid email?

// - must have one @ sign
// - first part only contains 1+ of the following: A-Z, a-z, 0-9.
// - second part contains 2+ components, separated by a single dot .
//   - each component contains 1+ of the following: A-Z, a-z

function isValidEmail(email) {
  return Boolean(email.match(/^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/i));
}

// console.log(1, isValidEmail('Foo@baz.com.ph'));          // returns true
// console.log(2, isValidEmail('Foo@mx.baz.com.ph'));       // returns true
// console.log(3, isValidEmail('foo@baz.com'));             // returns true
// console.log(4, isValidEmail('foo@baz.ph'));              // returns true
// console.log(5, isValidEmail('HELLO123@baz'));            // returns false
// console.log(6, isValidEmail('foo.bar@baz.to'));          // returns false
// console.log(7, isValidEmail('foo@baz.'));                // returns false
// console.log(8, isValidEmail('foo_bat@baz'));             // returns false
// console.log(9, isValidEmail('foo@bar.a12'));             // returns false
// console.log(10, isValidEmail('foo_bar@baz.com'));         // returns false
// console.log(11, isValidEmail('foo@bar.....com'));         // returns false
