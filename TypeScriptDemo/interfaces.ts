interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "John", id: 1, email: "" };

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "john", id: 1, email: "", salary: 100 };

export interface Login {
  Login(): User;
}

//Object Destructuring
let { name: userName, email }: User = { name: "john", id: 1, email: "" };

//Array Destructuring
let [user1, user2]: User[] = [
  { name: "Fernanda", id: 1, email: "" },
  { name: "Amaral", id: 2, email: "" },
  { name: "Dominga", id: 3, email: "" },
];

console.log(user1);
console.log(user2);
