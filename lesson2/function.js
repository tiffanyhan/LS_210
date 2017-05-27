function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

var temperatures = [97, 78, 82, 66, 100];
console.log(average(temperatures));