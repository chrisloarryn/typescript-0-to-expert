function calculateRectangleArea(base: number, height: number) {
  return base * height
}

function printArea(result: number) {
  console.log(`Result: ${result}`)
}

let calculator: (b: number, h: number) => number
calculator = calculateRectangleArea
// calculator = printArea // error

console.log(calculator(2, 10))