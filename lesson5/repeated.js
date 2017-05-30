function repeatedCharacters(string) {
  var result = {};
  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (!result[string[i]]) {
      result[string[i]] = 0;
    }
    result[string[i]] += 1;
  }

  for (var key in result) {
    if (result[key] < 2) {
      delete result[key];
    }
  }

  return result;
}

// console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
// console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
// console.log(repeatedCharacters('Pet'));            // {}
// console.log(repeatedCharacters('Paper'));          // { p: 2 }
// console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
