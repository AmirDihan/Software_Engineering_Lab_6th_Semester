// Interface for Shape behavior (calculateArea)
class IShape {
    calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented.");
    }
  } 
  // Interface for Drawable behavior
  class IDrawable {
    draw() {
      throw new Error("Method 'draw()' must be implemented.");
    }
  }
  // Base Shape class (SRP: only handles geometry)
  class Shape extends IShape {
    constructor() {
      super();
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class Shape.");
      }
    }
  }  
  // Utility class for logging (SRP: only handles logging)
  class Logger {
    static log(message) {
      console.log(message);
    }
  } 
  // Circle class (OCP: extend Shape without modifying it)
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
    draw() {
      Logger.log(`Drawing a circle with radius ${this.radius}`);
    }
  }  
  // Rectangle class
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }  
    calculateArea() {
      return this.width * this.height;
    }  
    draw() {
      Logger.log(`Drawing a rectangle of ${this.width} x ${this.height}`);
    }
  }
  // AreaCalculator class (SRP + DIP: depends on abstractions, not specific shapes)
  class AreaCalculator {
    static printArea(shape) {
      if (!(shape instanceof IShape)) {
        throw new Error("Invalid shape. Must implement IShape.");
      }
      Logger.log(`Area: ${shape.calculateArea()}\n`);
    }
  }
  // Demo (LSP: all shapes can be treated as Shape/IShape)
  const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
  ];
  shapes.forEach(shape => {
    shape.draw();                          // ISP: only uses draw() if supported
    AreaCalculator.printArea(shape);       // DRY: reused area calculation logic
  });
  