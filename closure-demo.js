console.log("-----------------------------------------------------------------------------------");

// scope of var
var var1 = "variable declared by var, outside the function";
var2 = "variable declared by default, outside the function";

function readGlobal() {
    // function can read global var outside its scope
    console.log(var1);
    console.log(var2);
    console.log("varaible declared globally is always global variable")

    globalVar = "by default, a variable declared in a function is a global variable";
    var localVar = "if declared with var, the variable will be a local variable";
}

readGlobal();

console.log("-----------------------------------------------------------------------------------");

console.log(globalVar);
console.log("and it can be read even after the life cycle of the function")
// error, localVar cannot be read outside a function
// console.log(localVar);

console.log("-----------------------------------------------------------------------------------");



// nested function
function outerFunction(){
    var outerTemp = 0;

    function innerFunction(){
        var innerTemp = 1;
        console.log(outerTemp);
    }

    innerFunction();
    // error, outer function cannot read variable declared in inner function
    // console.log(innerTemp);
}

console.log("inner function can read variable defined in outer function");
outerFunction();

console.log("-----------------------------------------------------------------------------------");

// a way to read the local var outside of a function
function f1(){
    var temp = 999;
    function f2(){
        temp++;
        return temp;
    }
    return f2;
}

var result = f1();
console.log(result());
console.log(result()+1);

console.log("-----------------------------------------------------------------------------------");

// a typical closure situation
function addNum(x) {
    return function (y) {
        return x + y;
    };
}

var result1 = addNum(1);
var result2 = addNum(2);

console.log(result1(100));
console.log(result2(200));
console.log(result1(1000));

console.log("-----------------------------------------------------------------------------------");