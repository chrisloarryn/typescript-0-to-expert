"use strict";
var Rectangle = /** @class */ (function () {
    /* private rectangleBase: number
    private rectangleHeight: number
    private rectangleColor: string */
    function Rectangle(rectangleBase, rectangleHeight, rectangleColor) {
        this.rectangleBase = rectangleBase;
        this.rectangleHeight = rectangleHeight;
        this.rectangleColor = rectangleColor;
        /* this.rectangleBase = baseRect
        this.rectangleHeight = heightRect
        this.rectangleColor = colorRect
        */
    }
    Rectangle.prototype.calculateArea = function () {
        // A = h * b
        var A = this.rectangleHeight * this.rectangleBase;
        this.printResult(A);
        return A;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        // P = 2 * h + 2 * b
        var P = 2 * this.rectangleHeight + 2 * this.rectangleBase;
        this.printResult(P);
        return P;
    };
    Rectangle.calculatePerimeterRectangle = function (heightRect, baseRect) {
        return (2 * heightRect) + (2 * baseRect);
    };
    Rectangle.prototype.printResult = function (result) {
        // validations
        if (result < 10) {
            console.log('normal values');
        }
        else {
            console.log('values bigger than 10');
        }
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radio) {
        this.radio = radio;
        Circle.circlesNumber++;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    Circle.circlesNumber = 0;
    Circle.PI = 3.1416;
    return Circle;
}());
var variable = 0;
var rectangle = new Rectangle(2, 2, 'red');
var rectangle2 = new Rectangle(4, 4, 'green');
rectangle.calculateArea();
rectangle2.calculateArea();
// rectangle.printResult(11) // private method
// rectangle.rectangleColor = 'Negro' // private property
console.log(Math.pow(2, 2));
var resultPerimeter = Rectangle.calculatePerimeterRectangle(2, 2);
console.log(resultPerimeter);
var circle1 = new Circle(20);
var circle2 = new Circle(50);
var circle3 = new Circle(10);
Circle.PI = '';
console.log("# of circles " + Circle.circlesNumber);
