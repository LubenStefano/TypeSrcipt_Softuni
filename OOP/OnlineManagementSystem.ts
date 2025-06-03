abstract class Course{
    public title:string;
    public duration:number;

    constructor(t:string, d:number){
        this.title = t;
        this.duration = d;
    }

    abstract getDescription():string;
}

class ProgrammingCourse extends Course{
    public language:string;

    constructor(t:string, d:number, l:string){
        super(t, d)
        this.language=l;
    }

    getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`
    }
}

class DesignCourse extends Course{
    public tools:string[];

    constructor(t:string, d:number, _tools:string[]){
        super(t, d)
        this.tools=_tools;
    }

    getDescription(): string {
        return `Programming Course: ${this.title} using ${this.tools} - ${this.duration} hours`
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");

const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);

console.log(jsCourse.getDescription());

console.log(uiCourse.getDescription());