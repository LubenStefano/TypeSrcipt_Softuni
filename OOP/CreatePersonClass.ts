interface IPerson {
    FirstName: string;
    LastName: string;
    Age: number;
    introduce(): string 
}

class Person implements IPerson {
    FirstName: string;
    LastName: string;
    Age: number;

    constructor(fisrtName: string, lastName: string, age: number){
        this.FirstName = fisrtName;
        this.LastName = lastName;
        this.Age = age;
    }

    public introduce(): string {
        
        return `My name is ${this.FirstName} ${this.LastName} and I am  ${this.Age} years old!`
    }
    
}

const person = new Person("John", "Doe", 30);

console.log(person.introduce());