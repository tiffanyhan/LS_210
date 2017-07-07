// function takes in a single argument, representing the total number of switches/lights
// returns an array, representing the lights that are on at the end

// n = total number of switches/lights
// repeat n times

// in the beginning, all lights are off
// from 1 to n
// starting at switch 0, increment by that number and toggle the switch you're on

// result is array of the numbers of switches which are on at the end

// DATA STRUCTURE:
// input is an integer
// output is an array of integers

// each integer representing a particular switch
// each switch can be on/off, default is off

// how to represent on/off status of switch?
// can use an array of objects
// each object represents a switch and its on/off status
// key can be 'on', while value is a Boolean.

// in the beginning, create this array of objects, with default status of 'off'

// ALGORITHM:
// loop through n times, in order to create this array of objects
// loop through from 1 to n
  // each time, increment by the number (start with 0) and then negate the boolean of that switch number
  // continue until you run out of switches

function lightsOn(n) {
  var result = [];
  var lights = initializeLights(n);

  for (var i = 1; i <= n; i++) {
    lights = toggleLights(lights, i);
  }

  for (var j = 0; j < n; j++) {
    if (lights[j]) {
      result.push(j + 1);
    }
  }

  return result;
}

function initializeLights(n) {
  var lights = [];
  for (var i = 0; i < n; i++) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) {
  return lights.map(function(light, index) {
    return ((index + 1) % round === 0 ? !light : light);
  });
}

console.log(lightsOn(5));   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on [1,2,3,4,5]
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on [1,3,5]
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// round 0: [of,of,of,of,of]
// round 1: [on,on,on,on,on]
// round 2: [on,of,on,of,on]
// round 3: [on,of,of,of,on]
// round 4: [on,of,of,on,on]
// round 5: [on,of,of,on,of]
// round 5: [on,of,of,on,of]


console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(1)); // [1]
console.log(lightsOn(3)); // [1]

// detailed result of each round for 3 lights
// Round 1: all lights are on [1, 2, 3]
// Round 2: 2 is off [1, 3]
// Round 3: 3 is off [1]
