"use strict";
class Course {
    title;
    duration;
    constructor(t, d) {
        this.title = t;
        this.duration = d;
    }
}
class ProgrammingCourse extends Course {
    language;
    constructor(t, d, l) {
        super(t, d);
        this.language = l;
    }
    getDescription() {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}
class DesignCourse extends Course {
    tools;
    constructor(t, d, _tools) {
        super(t, d);
        this.tools = _tools;
    }
    getDescription() {
        return `Programming Course: ${this.title} using ${this.tools} - ${this.duration} hours`;
    }
}
const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());
//# sourceMappingURL=OnlineManagementSystem.js.map