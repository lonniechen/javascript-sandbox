function fibonacci(x) {
    if (x == 0 || x == 1) {
        return x;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

function fibonacci(x) {
    if (x == 0 || x == 1) {
        return x;
    }
    var data = new Array();
    data[0] = 0;
    data[1] = 1;

    for (let i = 2; i <= x; i++) {
        data[i] = data[i - 1] + data[i - 2];
    }

    return data[x];
}

console.log("fibonacci:");
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

console.log("fibonacci with DP:");
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}