var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// function takes in an object of student scores

// outputs one object with two keys:
// studentGrades - an array of each student's overall grade
     // grade - represented as a string containing the number, a space, and letter grade in parantheses
// exams - an array of each exam as an object
     // exam - an object with three keys: average, minimum, and maximum

// PROCESS (seems like a reduce)

// FOR studentGrades
// iterate through each student score
// sum up their overall grade
// add each overall grade to the new object

// FOR exams
// access the first exam in each student score
// find the average, minimum, and maximum,
// add the results to the new object
// continue to next exam

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  // transform the above score objects to be an array of arrays
  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData),
  }
};

function getTotal(array) {
  return array.reduce(function(sum, val) {
    return sum + val;
  });
}

function getAverage(array) {
  return getTotal(array) / array.length;
}

function getMinimum(array) {
  return array.reduce(function(min, val) {
    return val <= min ? val : min;
  });
}

function getMaximum(array) {
  return array.reduce(function(max, val) {
    return val >= max ? val : max;
  });
}

function getStudentScore(scoreObj) {
  var toLetterGrade = function(numGrade) {
    switch (true) {
    case (numGrade >= 93):
      return 'A';
    case (numGrade >= 85):
      return 'B';
    case (numGrade >= 77):
      return 'C';
    case (numGrade >= 69):
      return 'D';
    case (numGrade >= 60):
      return 'D';
    default:
      return 'F';
    }
  }

  var examAvg = getAverage(scoreObj.exams);
  var exerciseTotal = getTotal(scoreObj.exercises);
  var numGrade =  Math.round((examAvg * .65) + (exerciseTotal * .35));

  return String(numGrade) + ' (' + toLetterGrade(numGrade) + ')';
}

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}

function getExamSummary(examScoresPerStudent) {
  var scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(function(examScores) {
    return {
      average: getAverage(examScores),
      minimum: getMinimum(examScores),
      maximum: getMaximum(examScores),
    };
  });
}

// console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
