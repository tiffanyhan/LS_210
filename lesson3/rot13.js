// 65..90
// 97..122

function rot13(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    result += rot13Character(string[i]);
  }

  return result;
}

function rot13Character(char) {
  if (char.match(/[A-Za-z]/)) {
    var code = char.charCodeAt() + 13;

    if (
      (char.toUpperCase() === char && code > 90) ||
      (char.toLowerCase() === char && code > 122)
    ) {
      code -= 26;
    }

    char = String.fromCharCode(code);
  }

  return char;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.