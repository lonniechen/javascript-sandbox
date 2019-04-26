var moment = require("moment");

var time = "16/04/2019 12:00:00";

console.log(moment());
console.log(moment().format());
console.log(momoment.format("DD/MM/YYYY HH:mm:ss"));

console.log();
console.log();

console.log(moment(time,"DD/MM/YYYY HH:mm:ss"));
console.log(moment(time,"DD/MM/YYYY HH:mm:ss").format());
console.log(moment(time,"DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm:ss"));