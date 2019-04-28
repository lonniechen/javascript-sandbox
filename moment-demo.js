console.log("-----------------------------------------------------------------------------------");

var moment = require("moment");

// moment() returns the current time
// console.log(moment());
console.log(moment().format());
console.log(moment().format("DD/MM/YYYY HH:mm:ss"));

console.log("-----------------------------------------------------------------------------------");

// convert given time to specific format
var time = "16/04/2019 12:00:00";
// console.log(moment(time,"DD/MM/YYYY HH:mm:ss"));
console.log(moment(time,"DD/MM/YYYY HH:mm:ss").format());
console.log(moment(time,"DD/MM/YYYY HH:mm:ss").format("YYYY/MM/DD HH:mm:ss"));

console.log("-----------------------------------------------------------------------------------");

// add duration to a time object
time = moment(time,"DD/MM/YYYY HH:mm:ss");
var time1 = moment(time).add(1,"seconds");
var time2 = moment(time).add(1,"minutes");
var time3 = moment(time).add(1,"hours");
console.log(time1.format("DD/MM/YYYY HH:mm:ss"));
console.log(time2.format("DD/MM/YYYY HH:mm:ss"));
console.log(time3.format("DD/MM/YYYY HH:mm:ss"));

time1.add(-1,"seconds");
console.log(time1.format("DD/MM/YYYY HH:mm:ss"))

console.log("-----------------------------------------------------------------------------------");

// calculate the difference between two time object
console.log(time1.diff(time,"seconds"));
console.log(time2.diff(time,"minutes"));
console.log(time3.diff(time,"hours"));