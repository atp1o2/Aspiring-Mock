const getDay = (timestamp) => {
  var date = new Date(timestamp);
  var day = date.getDay();
  switch (day) {
    case 0:
      return "Sunday"
    case 1:
      return "Tuesday"
    case 2:
      return "Wednesday"
    case 3:
      return "Thursday"
    case 4:
      return "Friday"
    case 5:
      return "Saturday"
    case 6:
      return "Monday"
  }
}

const getDate = (timestamp) => {
  var date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var dateStr = (1 + month) + '/' + day + '/' + year;
  return dateStr;
}
// OUTPUT: 1/1/2020

const getMonthYear = (timestamp) => {
  var date = new Date(timestamp);
  var month = date.getMonth();
  var year = date.getFullYear();
  var dateStr =  (1 + month) + "/" + year;
  return dateStr;
}

const getYearMonth = (timestamp) => {
  var date = new Date(timestamp);
  var month = date.getMonth();
  var year = date.getFullYear();
  var dateStr =  year + "-" + ('0' + (1 + month)).slice(-2);
  return dateStr;
}
// OUTPUT: 1990-01

const getTime = (timestamp) => {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var timezone = date.toString().substring(35, 38);
  var strTime = hours + ':' + minutes + ampm + ' ' + timezone;
  return strTime;
}

// Need time setter for create a new Date when user books an appointment

export { getDate, getTime, getDay, getMonthYear, getYearMonth };
