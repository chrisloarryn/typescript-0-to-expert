"use strict";
var Battery = /** @class */ (function () {
    function Battery(_width) {
        this.defaultSize = 100;
        this.currentIndex = 0;
        this.quantityOfElements = 0;
        if (_width) {
            if (_width > 0) {
                this.customArray = new Array(_width);
            }
            else
                throw new Error('Bad width!');
        }
        else
            this.customArray = new Array(this.defaultSize);
    }
    Battery.prototype.addElement = function (element) {
        if (this.quantityOfElements === this.customArray.length) {
            throw new Error('Array is full!');
        }
        else {
            this.customArray[this.currentIndex] = element;
            this.currentIndex++;
            this.quantityOfElements++;
        }
    };
    Battery.prototype.removeElement = function () {
        if (this.quantityOfElements === 0) {
            throw new Error('Array is empty!');
        }
        else {
            this.currentIndex--;
            var element = this.customArray[this.currentIndex];
            this.quantityOfElements--;
            return element;
        }
    };
    return Battery;
}());
var GenericClass = /** @class */ (function () {
    function GenericClass(_item) {
        this.item = _item;
    }
    GenericClass.prototype.DoSomething = function (param) {
        var lis = param;
        return lis;
    };
    GenericClass.prototype.OpenConnection = function (param) {
        console.log(param.connectionString);
    };
    return GenericClass;
}());
var SQLConnection = /** @class */ (function () {
    function SQLConnection() {
        this.connectionString = 'ABC';
    }
    return SQLConnection;
}());
var OracleConnection = /** @class */ (function () {
    function OracleConnection() {
        this.connectionString = 'def';
    }
    return OracleConnection;
}());
var generic = new GenericClass(new SQLConnection());
var generic2 = new GenericClass(new OracleConnection());
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
function print(entity) {
    console.log('special report: ');
    console.log(entity);
}
print(3);
print('ssad');
print(true);
function getKeyOfUsingStringLiteral(pp1, value) {
    console.log(pp1 + " " + value[pp1]);
}
function getKeyUsingKeyOf(key, value) {
    console.log(key + " " + value[key]);
}
var testPerson = {
    id: 1,
    name: 'John',
    surname: 'Johnnny',
    age: 25
};
getKeyOfUsingStringLiteral('name', testPerson);
getKeyOfUsingStringLiteral('surname', testPerson);
getKeyUsingKeyOf('age', testPerson);
