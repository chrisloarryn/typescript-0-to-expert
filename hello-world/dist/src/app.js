"use strict";
console.log('Hello apps');
function print(name, t) {
    let x = 10;
    if (x < 10) {
        console.log(t);
        return 'test';
    }
    console.log(name);
}
// here there is a number
let x = 3;
x = 10;
const users = [
    { name: 'Nicholas', age: 5 },
    { name: 'Christopher', age: 1 }
];
const logged = users.find((user) => user.name === 'Jose');
console.log(logged?.name);
function fn(x) {
    return parseInt(x);
}
const n1 = fn.call(undefined, 'test');
// const n2 = fn.call(undefined, false) // shows error
