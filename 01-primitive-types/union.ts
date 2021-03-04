// sum numbers
// concat strings

const data: (number | string | boolean)[] = [2, 3, 4, 5, 6, 'hello', false]

function merge(first: number | string, second: number | string) {
  if (typeof first === 'number' && typeof second === 'number') {
    return console.log(first + second)
  }
  if (typeof first === 'string' && typeof second === 'string') {
    return console.log(`${first} ${second}`)
  }
  throw new Error('Invalid arguments!')
}

merge(1, '2')
