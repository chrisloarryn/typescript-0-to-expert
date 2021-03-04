type Browser = 'firefox' | 'chrome'
type FightOptions = 1 | 2 | 3

const hello = 'hello world'
const number1 = 1

function process(browser: Browser) {
  console.log('Valid browser')
}

function fight(difficulty: FightOptions) {
  console.log('Fight!')
}

// process('edge')
fight(3)
