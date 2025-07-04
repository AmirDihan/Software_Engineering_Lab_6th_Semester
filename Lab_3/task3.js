class Shape {
    constructor() {
      //
    }
    calculate_area() {
      //
    }
  }  
  const Drawable = {
    draw() {
      //
    }
  };  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    calculate_area() {
      return Math.PI * this.radius * this.radius;
    }
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }  
  }
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    calculate_area() {
      return this.width * this.height;
    }
    draw() {
      console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }
  }
  const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
  ];
  shapes.forEach(shape => {
    shape.draw();
    console.log(`Area: ${shape.calculate_area()}\n`);
  });
  