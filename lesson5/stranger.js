function greetings(name, status) {
  var nameGreet = 'Hello, ' + name.join(' ') + '!';
  var statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  return nameGreet + ' ' + statusGreet;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));

// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.
