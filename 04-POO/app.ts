class Rectangle {
  private rectangleBase: number
  private rectangleHeight: number
  private rectangleColor: string

  constructor(baseRect: number, heightRect: number, colorRect: string) {
    this.rectangleBase = baseRect
    this.rectangleHeight = heightRect
    this.rectangleColor = colorRect
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

  public printResult(result: number): void {
    // validations
    if (result < 10) {
      console.log('normal values')
    } else {
      console.log('values bigger than 10')
    }
  }
}

let variable: number = 0

let rectangle: Rectangle = new Rectangle(2, 2, 'red')
let rectangle2: Rectangle = new Rectangle(4, 4, 'green')

rectangle.calculateArea()
rectangle2.calculateArea()
// rectangle.printResult(11) // private method
// rectangle.rectangleColor = 'Negro' // private property
