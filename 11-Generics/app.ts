class Battery<T> {
  defaultSize: number = 100
  customArray: T[]
  currentIndex: number = 0
  quantityOfElements: number = 0

  constructor(_width?: number) {
    if (_width) {
      if (_width > 0) {
        this.customArray = new Array(_width)
      } else throw new Error('Bad width!')
    } else this.customArray = new Array(this.defaultSize)
  }

  addElement(element: T): void {
    if (this.quantityOfElements === this.customArray.length) {
      throw new Error('Array is full!')
    } else {
      this.customArray[this.currentIndex] = element
      this.currentIndex++
      this.quantityOfElements++
    }
  }

  removeElement(): T {
    if (this.quantityOfElements === 0) {
      throw new Error('Array is empty!')
    } else {
      this.currentIndex--
      const element: T = this.customArray[this.currentIndex]
      this.quantityOfElements--
      return element
    }
  }
}

class GenericClass<T extends ConnectionBase, U> {
  item?: T
  item2?: U
  constructor(_item: T) {
    this.item = _item
  }
  DoSomething(param: T): T {
    const lis: T = param
    return lis
  }
  OpenConnection(param: T): void {
    console.log(param.connectionString)
  }
}

interface ConnectionBase {
  connectionString?: string
}

class SQLConnection implements ConnectionBase {
  connectionString: string = 'ABC'
}

class OracleConnection implements ConnectionBase {
  connectionString: string = 'def'
}

const generic: GenericClass<SQLConnection, string> = new GenericClass(
  new SQLConnection()
)
const generic2: GenericClass<OracleConnection, string> = new GenericClass(
  new OracleConnection()
)
// const generic: GenericClass<number, string> = new GenericClass(1)
// const test1 = generic.DoSomething(24)
// console.log(test1)

// const generic2: GenericClass<string, boolean> = new GenericClass('sa')
// const test2 = generic2.DoSomething('Hello world')
// console.log(test2)

// const battery: Battery<number> = new Battery()
// const battery2: Battery<boolean> = new Battery()

// battery.addElement(25)
// battery.addElement(11)
// battery.addElement(87)

// battery2.addElement(true)
// battery2.addElement(false)
// // battery2.addElement(11) // bad

// let element: number = battery.removeElement()
// console.log(element)

// element = battery.removeElement()
// console.log(element)

// element = battery.removeElement()
// console.log(element)

function print<T>(entity: T) {
  console.log('special report: ')
  console.log(entity)
}

print(3)
print('ssad')
print(true)

interface IPerson {
  id: number
  name: string
  surname: string
  age: number
}

type PersonPropertyLiteral = 'id' | 'name' | 'surname'

function getKeyOfUsingStringLiteral(
  pp1: PersonPropertyLiteral,
  value: IPerson
) {
  console.log(`${pp1} ${value[pp1]}`)
}

function getKeyUsingKeyOf(
  key: keyof IPerson,
  value: IPerson
) {
  console.log(`${key} ${value[key]}`)
}

let testPerson: IPerson = {
  id: 1,
  name: 'John',
  surname: 'Johnnny',
  age: 25
}

getKeyOfUsingStringLiteral('name', testPerson)
getKeyOfUsingStringLiteral('surname', testPerson)

getKeyUsingKeyOf('age', testPerson)