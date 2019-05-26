const animal = require("../configs")

const playWithDog = () => {
    animal.Dog.bark();
}

const playWithCat = () => {
    animal.Cat.meow();
}

module.exports = {
    playWithDog,
    playWithCat
}