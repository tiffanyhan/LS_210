var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

// function takes in some text as a string
// outputs the longest sentence in the text, plus how many words are in that sentence

// what is a sentence?
// - a sentence ends with a period (.) , exclamation (!) , or question mark (?)

// separate the text into sentences (split)
// map each sentence into its an object with count + sentence
// reduce the counts to find max
// use maxCount as key to get sentence.

function wordCount(sentence) {
  return sentence.split(' ').length;
}

function longestSentence(text) {
  var sentences = text.match(/\w.+?[.!?]/g);

  var longest = sentences.reduce(function(longest, sentence) {
    return wordCount(sentence) > wordCount(longest) ? sentence : longest;
  });

  console.log(longest + '\n');
  console.log('The longest sentence has ' + wordCount(longest) + ' words.');
}

longestSentence(longText);

// function longestSentence(text) {
//   var sentences = text.match(/\w.+?[.!?]/g);

//   // what about sentences that have same length?
//   var sentenceWordCounts = {}
//   sentences.forEach(function(sentence) {
//     sentenceWordCounts[sentence.split(' ').length] = sentence;
//   });

//   var counts = Object.keys(sentenceWordCounts);
//   var countMax = counts.reduce(function(max, val) {
//     return val >= max ? val : max;
//   });

//   console.log(sentenceWordCounts[countMax] + '\n');
//   console.log('The longest sentence has ' + countMax + ' words.');
// }

// longestSentence(longText);

// console output

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.