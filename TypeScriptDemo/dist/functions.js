"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(3, 7));
//Another ways to write functions
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 8));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 5));
//Optional parameters ?
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(2, 5, 7));
console.log(add2(5, 7));
//default param
const sub2 = (num1, num2, num3 = 2) => num1 - num2 - num3;
console.log(sub2(10, 8));
console.log(sub2(10, 8, 1));
//Rest param  ... Rest operator
function add3(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(add3(2, 3, ...numbers));
console.log(add3(20, 30, 3, 5, 6, 7, 8, 9, 11));
console.log(add3(5, 7, ...[1, 4, 5, 9]));
//Generic Functions
function getItems(items) {
    return new Array().concat(items);
}
let concatNumbers = getItems([1, 2, 3, 4, 5]);
let concatNumbers2 = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
let concatString2 = getItems(["a", "b", "c", "d"]);
console.log(concatNumbers);
console.log(concatNumbers2);
console.log(concatString);
console.log(concatString2);
//# sourceMappingURL=functions.js.map