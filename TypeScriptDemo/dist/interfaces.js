"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "" };
let employee = { name: "john", id: 1, email: "", salary: 100 };
//Object Destructuring
let { name: userName, email } = { name: "john", id: 1, email: "" };
//Array Destructuring
let [user1, user2] = [
    { name: "Fernanda", id: 1, email: "" },
    { name: "Amaral", id: 2, email: "" },
    { name: "Dominga", id: 3, email: "" },
];
console.log(user1);
console.log(user2);
//# sourceMappingURL=interfaces.js.map