// function accepts a string of a number represented in octal
// function outputs an int of the value represented in decimal

// the power that we're using with 8 can correspond to the index

// convert the string to an array of digits
// perform the operations on each digit (transformation)
// sum up all the digits (reduce)

function octalToDecimal(number) {
  return number.split('').reverse().reduce(function(sum, digit, index) {
    return sum + (Number(digit) * Math.pow(8, index));
  }, 0);
}

// console.log(octalToDecimal('1'));           // 1
// console.log(octalToDecimal('10'));          // 8
// console.log(octalToDecimal('130'));         // 88
// console.log(octalToDecimal('17'));          // 15
// console.log(octalToDecimal('2047'));        // 1063
// console.log(octalToDecimal('011'));         // 9
