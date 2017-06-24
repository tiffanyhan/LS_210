// function takes in a string of email data
// outputs email summary
//   - # of email messages in the string
//   - date range of email messages

// email messages separated by ##||##

// each email has five parts
  // - each part is separated by #|#

  // the five parts are (in order):
  //   - sender
  //   - subject
  //   - date
  //   - recipient
  //   - body

// separate the string into emails (split)
// separate each email into its parts (split)

// get the date of each email (transform)
// find the minimum and maximum dates (reduce)

// day, month, date, year (separated by spaces)

function formattedDateRange(dates) {
  dates.sort(function(a, b) {
    return a.valueOf() - b.valueOf();
  });

  return dates[0].toDateString() + ' - ' + dates[dates.length - 1].toDateString();
}

function mailCount(emailData) {
  var emails = emailData.split('##||##');

  var emailParts;
  var emailDates = emails.map(function(email) {
    emailParts = email.split('#/#');
    return new Date(emailParts[2].split(' ')[1]);
  });

  console.log('Count of Email: ' + emails.length);
  console.log('Date Range: ' + formattedDateRange(emailDates));
}

mailCount(emailData);

// console.output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
