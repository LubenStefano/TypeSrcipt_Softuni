"use strict";
class Shape {
    color;
    constructor(c) {
        this.color = c;
    }
}
class Circle extends Shape {
    radius;
    constructor(c, r) {
        super(c);
        this.radius = r;
    }
    getArea() {
        return (this.radius ** 2) * Math.PI;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(c, w, h) {
        super(c);
        this.width = w;
        this.height = h;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=AbstractClass.js.map