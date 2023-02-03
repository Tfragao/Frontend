"use strict";
let lname;
lname = "Fragao";
console.log(lname.toUpperCase());
let age = 20;
let dob = "25";
let result = parseInt(dob);
console.log(result);
let isValid = false;
console.log(isValid);
let employess = ["Marcelo", "Migeul", "robertson", "Maria", "Manuela"];
let numbList = [1, 2, 3, 4, 5];
let products = [10, 30, 23, 12, 7, 35, 100, 2000, 34545, 99];
let resultNumb = numbList.filter((num) => num > 2);
let findResult = numbList.find((num) => num === 2);
let emp = employess.find((emp) => emp === "Maria");
let sum = numbList.reduce((acc, num) => acc + num);
let sumOfProducts = products.reduce((acc, num) => acc + num);
console.log(resultNumb);
console.log(findResult);
console.log(emp);
console.log(sum);
console.log("Total product in the shopping cart: " + sumOfProducts);
let c = 2 /* Color.Blue */;
//Tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
console.log(swapNumbers(10, 20));
//any, Try to avoid in your code
let department;
department = "IT";
department = 10;
//# sourceMappingURL=datatype.js.map