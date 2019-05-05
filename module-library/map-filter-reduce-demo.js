const transaction = [
    { key: 1, date: "Jan", type: "electricity", custodian: "CL", amount: 100 },
    { key: 2, date: "Jan", type: "water", custodian: "Billy", amount: 200 },
    { key: 3, date: "Jan", type: "rent", custodian: "Carl", amount: 3000 },
    { key: 4, date: "Feb", type: "electricity", custodian: "Billy", amount: 200 },
    { key: 5, date: "Feb", type: "water", custodian: "Carl", amount: 400 },
    { key: 6, date: "Feb", type: "rent", custodian: "CL", amount: 3000 },
    { key: 7, date: "Mar", type: "electricity", custodian: "Carl", amount: 300 },
    { key: 8, date: "Mar", type: "water", custodian: "CL", amount: 600 },
    { key: 9, date: "Mar", type: "rent", custodian: "Billy", amount: 3000 }
]
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);

// map
var mapExample = transaction.map((data) => {
    return data.amount;
});
// var mapExample2 = transaction.map(data => data.amount); // an equivalent solution
console.log(mapExample);
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);

// filter
var filterExample = transaction.filter((data) => {
    return data.date === "Jan";
})
// var filterExample2 = transaction.filter(data => data.date === "Jan"); // equivalent
console.log(filterExample);
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);

// reduce
var reduceExample = transaction.reduce((sum, data) => {
    return sum + data.amount;
}, 1) // inital value is set to 1
// var reduceExample2 = transaction.reduce((sum, data) => sum + data.amount, 1) // equivalent
console.log(reduceExample);
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);

// application 
// find out the transaction with lowest cost
var lowestCostTransaction = transaction.reduce((result, data) => {
    return (result.amount || 999999) < data.amount ? result : data;
}, {});
console.log(lowestCostTransaction);
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);

// find out the total cost in Feb
var transactionInFeb = transaction.filter(data => data.date === "Feb");
var sum = transactionInFeb.reduce((sum, data) => {
    return sum + data.amount;
}, 0)
// var sum2 = transaction.filter(data => data.date === "Feb").reduce((sum, data) => sum + data.amount, 0); //equivalent
console.log(sum); // 200 + 400 + 3000
console.log(`\x1b[33m%s\x1b[0m`, `-----------------------------`);