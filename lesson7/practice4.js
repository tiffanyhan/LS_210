// what is an anagram?  once you sort the words, they are the same
// select out of the list only words that are anagrams (filter)

function stringToSortedLetters(string) {
  return string.split('').sort();
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function(letter, index) {
    return letter === array2[index];
  });
}

function areAnagrams(word, possibility) {
  var wordLetters = stringToSortedLetters(word);
  var possibilityLetters = stringToSortedLetters(possibility);
  return compareArrays(wordLetters, possibilityLetters);
}

function anagram(word, list) {
  return list.filter(function(possibility) {
    return areAnagrams(word, possibility);
  });
}

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]
