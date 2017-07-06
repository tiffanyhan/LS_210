// function takes in a single string argument representing a word
// outputs true or false, representing whether it can be spelled with
//   spelling blocks

// spelling block rules
// -each block can be used only once
// -the word can only use one letter from any block
// -case insensitive

// DATA STRUCTURE:
// -spelling blocks can be a string containing letter pairs
//  separated by a space
// -convert string argument to an array of letters

// ALGORITHM:
// -create an array called usedLetters

// -downcase word, convert to an array of letters
// -iterate over each letter.
//   -if its not in usedLetters, add the letter pair it belongs to
//   -if it is in usedLetters, return false
// return true

function isBlockWord(word) {
  var availBlocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're',
                     'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
  var wordLetters = word.toLowerCase().split('');
  var block;

  for (var i = 0; i < wordLetters.length; i++) {
    block = availBlocks.filter(function(block) {
      return new RegExp(wordLetters[i]).test(block);
    })[0];

    if (block === undefined) {
      return false;
    }
    availBlocks.splice(availBlocks.indexOf(block), 1);
  }

  return true;
}

function getBlock(letter) {
  var SPELLING_BLOCKS = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're',
                         'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
  return SPELLING_BLOCKS.filter(function(block) {
    return new RegExp(letter).test(block);
  });
}

// console.log(getBlock('b')); // ['bo'];
// console.log(getBlock('f')); // ['fs'];
// console.log(getBlock('i')); // ['vi'];

// console.log(isBlockWord('BATCH')); // true
// // usedLetters = ['bo', 'na', 'gt', 'cp', hu]
// console.log(isBlockWord('BUTCH')); // false
// // usedLetters = ['bo', 'hu', 'gt', 'cp']
// console.log(isBlockWord('jest'));  // true
// console.log(isBlockWord('hello')); // false
