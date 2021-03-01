// sum numbers
// concat strings
var data = [2, 3, 4, 5, 6, 'hello', false];
function merge(first, second) {
    if (typeof first === 'number' && typeof second === 'number') {
        return console.log(first + second);
    }
    if (typeof first === 'string' && typeof second === 'string') {
        return console.log(first + " " + second);
    }
    throw new Error('Invalid arguments!');
}
merge(1, '2');
