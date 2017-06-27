// function takes in a single string argument, representing a word
// outputs a Boolean, representing whether the word can be spelled
//   with the blocks

// what is a word that can be spelled with the blocks?
//   -for the entire word, it must not have letters
//    that correspond to both letters in any block (case-insensitive)
//   -EACH BLOCK CAN ONLY BE USED ONCE!
      // (means no duplicate letters, add test case for this)

// DATA STRUCTURE:
// -can be an array of arrays [['B', 'O'], ['X', 'K'], etc]
// -or an array of strings ['B O', 'X K']?

// ALGORITHM:
// -iterate through each letter of the word (split str into arr)
// -find the array (spelling block) that the letter belongs to
// -get the other letter in the spelling block
// -check if that letter is used in the word
//   -if yes, return false immediately (use for loop)
//   -if no, continue
// -return true at the end

// ALTERNATIVE ALGORITHM:
// -create a new array called used
// -iterate over the word, check used if current char is there already
//   -if it is, return false
//   -if not add it to the used array and continue
// -return true at the end

var SPELLING_BLOCKS = ['B O', 'X K', 'D Q', 'C P', 'N A', 'G T', 'R E',
                       'F S', 'J W', 'H U', 'V I', 'L Y', 'Z M'];

function getSpellingBlock(char) {
  return SPELLING_BLOCKS.filter(function(block) {
    return block.indexOf(char) > -1;
  })[0];
}

// console.log(getSpellingBlock('B')); // 'B O'
// console.log(getSpellingBlock('M')); // 'Z M'
// console.log(getSpellingBlock('P')); // 'C P'


function isBlockWord(word) {
  var chars =  word.toUpperCase().split('');
  var blockLetters;
  var restricted;

  for (var i = 0; i < chars.length; i++) {
    blockLetters = getSpellingBlock(chars[i]).split(' ');
    restricted = blockLetters.filter(function(letter) {
      return letter !== chars[i];
    });

    if (word.indexOf(restricted) > -1) {
      return false;
    }
  }

  return true;
}

// console.log(isBlockWord('BATCH')); // true
// console.log(isBlockWord('BUTCH')); // false
// console.log(isBlockWord('jest')); // true
// console.log(isBlockWord('Hello')); // false!!! forgot to add this test case
