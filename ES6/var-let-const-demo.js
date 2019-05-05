console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);
{
    let a = 1;
    var b = 2;
    c = 3;
}
// console.log(`a is ${a}`); //ReferenceError
console.log(`b is ${b}`);
console.log(`c is ${c}`);

console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);
var d = [];
var e = [];
for (var i = 0; i < 5; i++) {
    d[i] = i;
    e[i] = function () {
        return i;
    }
}
console.log(`d[3] is ${d[3]}`);
console.log(`e[3] is ${e[3]()}`);

var f = [];
for (let j = 0; j < 5; j++) {
    f[j] = function () {
        return j;
    }
}
console.log(`f[3] is ${f[3]()}`);

var g = [];
for (k = 0; k < 5; k++) {
    g[k] = function () {
        return k;
    }
}
console.log(`g[3] is ${g[3]()}`);

console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);
for (let l = 0; l < 3; l++) {
    let l = `abc`;
    console.log(l);
}
