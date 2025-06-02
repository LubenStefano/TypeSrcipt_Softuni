class Employee{
    public name:string;
    protected postinion:string;
    private _salary: number;

    constructor(n:string, p:string, s:number){
        this.name = n;
        this.postinion = p;
        this._salary = s;
    }

    public getDetails():string{
        return `Name: ${this.name}, Position: ${this.postinion}`;
    }

    public showSalary():string{
        return "Salary:" + this._salary;
    }
}

const emp = new Employee("Alice", "Manager", 5000);

console.log(emp.getDetails());

console.log(emp.showSalary());

console.log(emp.name)

// console.log(emp.salary)

// console.log(emp.position)