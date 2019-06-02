// install the moment module
// npm install moment
const moment = require("moment");
const timeFormat = "YYYY-MM-DD HH:mm:ss";

// moment() returns the current time
console.log(moment().format());

// convert given time to specific format
time = "2019-05-01 12:00:00";
console.log(moment(time, timeFormat).format());
console.log(moment(time, timeFormat).format(timeFormat));

// add duration to a time object
time = moment(time, timeFormat);
time1 = moment(time).add(1, "seconds"); //create a new mement object based on time, add one second, pass the reference to time1
time2 = moment(time1).add(1, "minutes");
time3 = time2.add(-1, "hours"); // subtract one hour from time2, then copy the reference to time3
console.log(time1.format(timeFormat));
console.log(time2.format(timeFormat));
console.log(time3.format(timeFormat));

// calculate the difference between two time object
console.log(time1.diff(time)); //milliseconds by default
console.log(time2.diff(time, "minutes"));