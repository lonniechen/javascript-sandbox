const logger = require('../service/logger');
const constants = require('../service/constants');

// scope of block
logger.log(constants.loggingType.info, "scope");
{
    let a1 = 1;
    var a2 = 2;
    a3 = 3;
}
// console.log(`a1 is ${a1}`); //ReferenceError
console.log(`a2 is ${a2}`);
console.log(`a3 is ${a3}`);

// scope of for loop
for (let b1 = 0; b1 < 3; b1++) { };
// console.log(b1); //ReferenceError
for (var b2 = 0; b2 < 3; b2++) { };
console.log(`b2 is ${b2}`);
for (b3 = 0; b3 < 3; b3++) { };
console.log(`b3 is ${b3}`);

// a concrete example
var c1 = [];
var c2 = [];
for (var j1 = 0; j1 < 3; j1++) {
    c1[j1] = j1;
    c2[j1] = () => j1;
}
// j is declare by var
// its value was directly assigned to c1[] in c1[j]=j
// in c2[j]= () => j, only reference of j was passed
// so all c2[index] equals to final value of j
console.log(`c1[1] is ${c1[1]}`);
console.log(`c2[1] is ${c2[1]()}`);

// it's the same when it comes to default
var c3 = [];
for (j2 = 0; j2 < 3; j2++) {
    c3[j2] = () => j2;
}
console.log(`c3[1] is ${c3[1]()}`);

// solution to avoid this problem is to use let
var c4 = [];
for (let i = 0; i < 3; i++) {
    c4[i] = function () {
        return i;
    }
}
console.log(`c4[1] is ${c4[1]()}`);

// hoisting - only for var declared variables
logger.log(constants.loggingType.info, "hoisting")
// console.log(foo1); // ReferenceError
console.log(foo2); // undefined - hoisting
var foo2 = "hello";
// console.log(foo3); // ReferenceError
foo3 = "world";
// console.log(foo4); // ReferenceError
let foo4 = "!"
// hoisting - another case
var x1 = 1;
console.log(`${x1} + ${y1}`);
var y1 = 2;
// same as above
var x2 = 10;
var y2;
console.log(`${x2} + ${y2}`);
y2 = 20;

// temporal dead zone
logger.log(constants.loggingType.info, "temporal dead zone")
var temp1 = 123;
var temp2 = 456;
{
    // temp1 = `abc`; // ReferenceError
    temp2 = `def`;
    let temp1;
    var temp2;
    console.log(`temp1 in TDZ is ${temp1}`);
    console.log(`temp2 in TDZ is ${temp2}`);
}
console.log(`temp1 is ${temp1}`);
console.log(`temp2 is ${temp2}`);