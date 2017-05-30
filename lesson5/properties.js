function objectHasProperty(object, string) {
  var keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};
// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

function incrementProperty(object, key) {
  if (object[key]) {
    object[key] += 1;
  } else {
    object[key] = 1;
  }

  return object[key];
}

var wins = {
  steve: 3,
  susie: 4,
};
// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

function copyProperties(source, destination) {
  for (var key in source) {
    destination[key] = source[key];
  }
  return Object.keys(source).length;
}

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  var result = {};
  var words = string.split(' ');
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!result[word]) {
      result[word] = 0;
    }
    result[word] += 1;
  }

  return result;
}

// console.log(wordCount('box car cat bag box'));    // { box: 2, car: 1, cat: 1, bag: 1 }
