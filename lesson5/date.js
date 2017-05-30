// console.log(today);
// console.log('Today\'s day is ' + String(day));
// console.log('Today\'s day is ' + daysOfWeek[day]);
// console.log('Today\'s day is ' + daysOfWeek[day] + ', the ' + String(date) + 'th.');

function dateSuffix(date) {
  var suffix = 'th';
  var digit = date % 10;

  if ([11, 12, 13].includes(date)) {
    suffix = 'th';
  } else if (digit === 1) {
    suffix = 'st';
  } else if (digit === 2) {
    suffix = 'nd';
  } else if (digit === 3) {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log('Today\'s day is ' + day + ', ' +
                                   month + ' ' +
                                   dateSuffix(date.getDate()));
  return;
}

var today = new Date();
// formattedDate(today);

// console.log(today.getFullYear());
// console.log(today.getYear());
// console.log(today.getTime());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
// formattedDate(tomorrow);

var nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDate() + 7);
// console.log(nextWeek.toDateString() === today.toDateString());

function addZero(val) {
  return String(val).length === 1 ? '0' + val : val;
}

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

// console.log(formatTime(today));
