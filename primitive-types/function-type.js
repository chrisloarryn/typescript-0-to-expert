function calculateRectangleArea(base, height) {
    return base * height;
}
function printArea(result) {
    console.log("Result: " + result);
}
var calculator;
calculator = calculateRectangleArea;
// calculator = printArea // error
console.log(calculator(2, 10));
