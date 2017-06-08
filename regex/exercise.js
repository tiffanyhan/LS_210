function isUrl(string) {
  return !!string.match(/^https?:\/\/\S+$/);
}

// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

function fields(string) {
  return string.split(/[ \t,]+/);
}

// console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

function mysteryMath(string) {
  return string.replace(/[+\-*/]/, '?');
}

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

function mysteriousMath(string) {
  return string.replace(/[+\-*/]/g, '?');
}

// console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
// console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

function danish(string) {
  return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

// console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

// console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

// console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

// console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

// console.log(danish('I love pineapple'));
// -> 'I love pineapple'

function formatDate(string) {
  return string.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
}

// console.log(formatDate('2016-06-17')); // -> '17.06.2016'
// console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

function format_date(string) {
  var dateRegex = /^(\d\d\d\d)([\-/])(\d\d)\2(\d\d)$/;
  return string.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/, '$3.$2.$1')
               .replace(/(\d\d\d\d)\/(\d\d)\/(\d\d)/, '$3.$2.$1');
}

// console.log(format_date('2016-06-17')); // -> '17.06.2016'
// console.log(format_date('2017/05/03')); // -> '03.05.2017'
// console.log(format_date('2015/01-31')); // -> '2015/01-31' (no change)
