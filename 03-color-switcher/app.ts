type HexadecimalType = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]
const hexValues: HexadecimalType = [
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
]

const btn = document.getElementById('btn')!

const color = document.querySelector('.color')!

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

btn.addEventListener('click', () =>
  generateColor(updateUI))

const updateUI = (hexColor: string) => {
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
}

const generateColor = (update: (color: string) => void) => {
  let hexColor: string = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[getRandomNumber()]
  }
  update(hexColor)
}

const getRandomNumber = () => Math.floor(Math.random() * hexValues.length)
