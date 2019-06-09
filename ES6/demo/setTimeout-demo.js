const logger = require('../service/logger');
const constants = require('../service/constants');

const selfIntro = (name) => {
    console.log(`My name is ${name}`);
}

setTimeout(selfIntro, 3000, "CL");
setTimeout(selfIntro, 1000, "Ele");

console.log('What is your name?');