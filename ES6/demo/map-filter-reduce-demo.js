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

// map
logger.log(constants.loggingType.info, "map")
const mapExample = transaction.map((data) => {
    return data.amount;
});
// const mapExample2 = transaction.map(data => data.amount); // an equivalent solution
console.log(mapExample);

// filter
logger.log(constants.loggingType.info, "filter")
const filterExample = transaction.filter((data) => {
    return data.date === "Jan";
})
// const filterExample2 = transaction.filter(data => data.date === "Jan"); // equivalent
console.log(filterExample);

// reduce
logger.log(constants.loggingType.info, "reduce")
const reduceExample = transaction.reduce((sum, data) => {
    return sum + data.amount;
}, 1) // inital value is set to 1, only for demonstrating purpose
// const reduceExample2 = transaction.reduce((sum, data) => sum + data.amount, 1) // equivalent
console.log(reduceExample);

// application 
logger.log(constants.loggingType.info, "application")
// find out the transaction with lowest cost
const lowestCostTransaction = transaction.reduce((result, data) => {
    return (result.amount || 999999) < data.amount ? result : data;
}, {});
console.log(lowestCostTransaction);

// find out the total cost in Feb
const transactionInFeb = transaction.filter(data => data.date === "Feb");
const sum = transactionInFeb.reduce((sum, data) => {
    return sum + data.amount;
}, 0)
// const sum2 = transaction.filter(data => data.date === "Feb").reduce((sum, data) => sum + data.amount, 0); //equivalent
console.log(sum); // 200 + 400 + 3000