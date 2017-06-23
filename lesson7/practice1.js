// function accepts an array of arrays
// each array represents a rectangle with height and width

// we want to get the area of each rectangle (map/transformation)
// and then add up all the areas (reduce)

function rectangleArea(rectangle) {
  return rectangle[0] * rectangle[1];
}

function totalArea(rectangles) {
  var areas = rectangles.map(rectangleArea);

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles)); // 141

// first filter the array to an array of only squares
// then pass that array to totalArea function

function isSquare(rectangle) {
  return rectangle[0] === rectangle[1];
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(isSquare);

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalSquareArea(rectangles)); // 121