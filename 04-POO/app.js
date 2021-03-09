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
var variable = 0;
var rectangle = new Rectangle(2, 2, 'red');
var rectangle2 = new Rectangle(4, 4, 'green');
rectangle.calculateArea();
rectangle2.calculateArea();
// rectangle.printResult(11) // private method
// rectangle.rectangleColor = 'Negro' // private property
