class Task{
    public title:string;
    public description:string;
    public completed:boolean = false;
    private _createdBy:string;

    constructor(title: string, description:string, createdBy:string){
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(): string{
        return this._createdBy;
    }

    toggleStatus():void{
        this.completed = this.completed ? this.completed = false : this.completed = true;
    }

    getDetails():string{
        let status:string = this.completed ? "Completed" : "Pending";
        return `Task: ${this.title} - ${this.description} - ${status}`
    }

    static createSampleTasks(): Task[]{
        let task1 = new Task("Complete coloring", "Finish coloring exercises", "Madie");
        let task2 = new Task("Complete cooking", "Finish cooking class", "Ivy");

        return [task1, task2]
    }
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");

task1.toggleStatus();

console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");

console.log(task2.getDetails());

const tasks = Task.createSampleTasks();

tasks.forEach(task => console.log(task.getDetails()))