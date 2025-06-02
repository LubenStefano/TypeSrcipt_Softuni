"use strict";
class Person {
    FirstName;
    LastName;
    Age;
    constructor(fisrtName, lastName, age) {
        this.FirstName = fisrtName;
        this.LastName = lastName;
        this.Age = age;
    }
    introduce() {
        return `My name is ${this.FirstName} ${this.LastName} and I am  ${this.Age} years old!`;
    }
}
const person = new Person("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=CreatePersonClass.js.map