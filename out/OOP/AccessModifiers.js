"use strict";
class Employee {
    name;
    postinion;
    _salary;
    constructor(n, p, s) {
        this.name = n;
        this.postinion = p;
        this._salary = s;
    }
    getDetails() {
        return `Name: ${this.name}, Position: ${this.postinion}`;
    }
    showSalary() {
        return "Salary:" + this._salary;
    }
}
const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary)
// console.log(emp.position)
//# sourceMappingURL=AccessModifiers.js.map