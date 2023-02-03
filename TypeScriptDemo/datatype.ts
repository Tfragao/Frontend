let lname : string;
lname = "Fragao";
console.log(lname.toUpperCase());

let age : number = 20;
let dob : string = "25"
let result : number = parseInt(dob);
console.log(result);

let isValid : boolean = false;
console.log(isValid);


let employess : string[] = ["Marcelo", "Migeul", "robertson", "Maria", "Manuela"];
let numbList : Array<number> = [1,2,3,4,5];
let products : Array<number> = [10, 30, 23, 12, 7, 35, 100, 2000, 34545, 99];

let resultNumb = numbList.filter((num)=> num > 2);
let findResult = numbList.find((num) => num === 2);
let emp = employess.find((emp) => emp === "Maria");
let sum = numbList.reduce((acc, num) => acc + num);
let sumOfProducts = products.reduce((acc, num) => acc + num);

console.log(resultNumb);
console.log(findResult);
console.log(emp);
console.log(sum);
console.log("Total product in the shopping cart: " + sumOfProducts);

const enum Color {
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

//Tuples
let swapNumbs : [number,number];
function swapNumbers (num1: number, num2:number) : [number,number] {
    return [num2, num1];
} 

console.log(swapNumbers(10, 20));

//any, Try to avoid in your code
let department : any;
department = "IT";
department = 10;



