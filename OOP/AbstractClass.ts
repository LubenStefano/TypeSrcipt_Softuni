abstract class Shape {
  public color: string;

  constructor(c: string) {
    this.color = c;
  }

  public abstract getArea(): Number;
}

class Circle extends Shape {
  private radius: number;
  constructor(c: string, r: number) {
    super(c);
    this.radius = r;
  }

  public getArea(): Number {
    return (this.radius **2) * Math.PI;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(c: string, w: number, h: number) {
    super(c);
    this.width = w;
    this.height = h;
  }

  public getArea(): Number {
    return this.width * this.height;
  }
}

const circle = new Circle("red", 5);

console.log(circle.getArea())

const rectangle = new Rectangle("blue", 4, 6);

console.log(rectangle.getArea());