"use strict";
var hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');
// btn.addEventListener('click', () => {
//   // console.log(document.body)
//   let hexColor: string = "#"
//   for (let i = 0; i < 6; i++) {
//     hexColor += hexValues[getRandomNumber()]
//   }
//   color.textContent = hexColor
//   document.body.style.backgroundColor = hexColor
// })
// btn.addEventListener('click', () => {
//   generateColor((col) => {
//     color.textContent = col
//     document.body.style.backgroundColor = col
//   })
// })
btn.addEventListener('click', function () {
    return generateColor(updateUI);
});
var updateUI = function (hexColor) {
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
};
var generateColor = function (update) {
    var hexColor = '#';
    for (var i = 0; i < 6; i++) {
        hexColor += hexValues[getRandomNumber()];
    }
    update(hexColor);
};
var getRandomNumber = function () { return Math.floor(Math.random() * hexValues.length); };
