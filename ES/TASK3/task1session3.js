// da el parent class

class Polygon {
//had5el leh esm el shakel bt3i
// mamno3 a3mel keda   new Polygon("shape");
    constructor(name) {
        if (this.constructor === Polygon) {
            throw new Error("Can't entre the name  Polygon directly");
        }
        //low 7aga 8er pologyon f tmam

        this.name = name;
    }
    //w lazem tkteb el area w ezay tt3mel

    area() {
        throw new Error("area  must be implemented");
    }

    toString() {
        return `${this.name} Area = ${this.area()}`;
    }
}


// Rectangle by3mel inhertaince 

class Rectangle extends Polygon {

    constructor(width, height) {
        // fe awel sater b2olo en el polygon rect
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    //b3et el  area 3shan my3melsh error

    area() {
        return this.width * this.height;
    }

    toString() {
        return `${this.name}
        width = ${this.width}
        height = ${this.height}
        area = ${this.area()}`;
            }
}


// Square

class Square extends Polygon {

    constructor(side) {
        // hena b2ol en el polygon howa square
        super("Square");
        this.side = side;
    }
//b2olo rule el area
    area() {
        return this.side * this.side;
    }

    toString() {
        return `${this.name}
        side = ${this.side}
        area = ${this.area()}`;
    }
}


// Circle

class Circle extends Polygon {

    constructor(radius) {
        // hena b2ol en el polygon howa square
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    toString() {
        return `${this.name}
        radius = ${this.radius}
        area = ${this.area().toFixed(2)}`;
//ast5demt nearset 2 decimal place
    }
}


// Triangle

class Triangle extends Polygon {

    constructor(base, height) {
        //el polygon howa triangle
        super("Triangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `${this.name}
            base = ${this.base}
            height = ${this.height}
            area = ${this.area()}`;
    }
}



// test el objects 

let rect = new Rectangle(10, 5);
let square = new Square(6);
let circle = new Circle(4);
let triangle = new Triangle(8, 5);


// displayel results

console.log(rect.toString());

console.log("----------------");

console.log(square.toString());

console.log("----------------");

console.log(circle.toString());

console.log("----------------");

console.log(triangle.toString());