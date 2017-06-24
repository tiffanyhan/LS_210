// what are balanced parentheses?
// when each ( has a ) and each pair starts with (

// how to find this out?
  // ( is +1
  // ) is -1
  // negative sum means that parentheses are unbalanced.

// iterate through string, applying this

function isBalanced(string) {
  var parensCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] === ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

// console.log(isBalanced('What (is) this?'));        // true
// console.log(isBalanced('What is) this?'));         // false
// console.log(isBalanced('What (is this?'));         // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));                   // true
// console.log(isBalanced(')Hey!('));                 // false
// console.log(isBalanced('What ((is))) up('));       // false
