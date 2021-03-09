class Rectangle {
  /* private rectangleBase: number
  private rectangleHeight: number
  private rectangleColor: string */

  constructor(public rectangleBase: number, public rectangleHeight: number, public rectangleColor: string) {
    /* this.rectangleBase = baseRect
    this.rectangleHeight = heightRect
    this.rectangleColor = colorRect
    */
  } 

  calculateArea(): number {
    // A = h * b
    const A = this.rectangleHeight * this.rectangleBase
    this.printResult(A)
    return A
  }

  calculatePerimeter(): number {
    // P = 2 * h + 2 * b
    const P = 2 * this.rectangleHeight + 2 * this.rectangleBase
    this.printResult(P)
    return P
  }

  static calculatePerimeterRectangle(heightRect: number, baseRect: number) {
    return (2 * heightRect) + (2 * baseRect)
  }

  public printResult(result: number): void {
    // validations
    if (result < 10) {
      console.log('normal values')
    } else {
      console.log('values bigger than 10')
    }
  }
}

class Circle {
  static circlesNumber: number = 0
  static readonly PI: number = 3.1416
  constructor(private radio: number) {
    Circle.circlesNumber++
  }

  calculateArea(): number {
    return Math.PI * this.radio * this.radio
  }
}

let variable: number = 0

let rectangle: Rectangle = new Rectangle(2, 2, 'red')
let rectangle2: Rectangle = new Rectangle(4, 4, 'green')

rectangle.calculateArea()
rectangle2.calculateArea()
// rectangle.printResult(11) // private method
// rectangle.rectangleColor = 'Negro' // private property


console.log(Math.pow(2, 2))

const resultPerimeter = Rectangle.calculatePerimeterRectangle(2, 2)
console.log(resultPerimeter)

const circle1: Circle = new Circle(20)
const circle2: Circle = new Circle(50)
const circle3: Circle = new Circle(10)

Circle.PI = ''

console.log(`# of circles ${Circle.circlesNumber}`)