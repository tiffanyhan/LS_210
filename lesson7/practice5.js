var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zi.on', country: 'Spain', active: true },
];

// function takes in an array of bands

// all bands should have 'Canada' as their country (map?)
// each band name should have its first letter capitalized and contain no dots (map?)

// return the new array

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function capitalizeEachWord(string) {
  return string.split(' ').map(function(word) {
    return capitalizeFirstLetter(word);
  }).join(' ');
}

function removeDots(string) {
  return string.replace(/\./g, '');
}

function processBands(data) {
  var newName;

  return data.map(function(band) {
    newName = removeDots(band.name);
    newName = capitalizeEachWord(newName);

    return {
      name: newName,
      country: 'Canada',
      active: band.active,
    };
  });
}

// console.log(processBands(bands));

// should return:

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

// console.log(bands);
