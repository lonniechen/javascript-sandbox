export class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark(): void {
        console.log(`My name is ${this.name} and I'm ${this.age}`)
    }
}

export class Cat {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    meow(): void {
        console.log(`My name is ${this.name} and I'm ${this.age}`)
    }
}