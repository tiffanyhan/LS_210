// what counts as a word?  separated by a space or by - (regex?)
// get the first letter of each word (map), join them all, upcase and return

function acronym(string) {
  var words = string.replace(/-/g, ' ').split(' ');
  var initials;

  initials = words.map(function(word) {
    return word[0].toUpperCase();
  })

  return initials.join('');
}

// console.log(acronym('Portable Network Graphics'));                 // "PNG"
// console.log(acronym('First In, First Out'));                       // "FIFO"
// console.log(acronym('PHP: HyperText Preprocessor'));               // "PHP"
// console.log(acronym('Complementary metal-oxide semiconductor'));   // "CMOS"
// console.log(acronym('Hyper-text Markup Language'));                // "HTML"
