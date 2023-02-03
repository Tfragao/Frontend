class Employee {
    // In case you dont initialize the variable put ! in front of it
    /* id!: number;
    name!: string;
    address!: string; */

    #id : number;  //# native synthax for creating private fields in Js
    #name : string;
    #address : string;

    constructor(id: number, name : string, address : string) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
    }
    getName(): string{
        return this.#name;
    }

    getAddress() : string {
        return this.#address;
    }

    getNameWithAddress() : string {
        return `${this.getName()} stays at ${this.getAddress()}`;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    //setters and getters
    getId() : number {
        return this.#id;
    }

    setId(id : number){
        this.#id = id;
    }

}

/* let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "Highway 71"; */

let john = new Employee(1, "John", "Highway 71");

console.log(john.getNameWithAddress());

//john.setId(100);
console.log(john);

class Manager extends Employee {
    constructor(id:number, name : string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.getName()} is a manager at ${this.getAddress()}`;
    }
}

let mike = new Manager(1,"Mike", "Bolueta drive");
console.log(mike.getNameWithAddress());

//static methods
console.log(Employee.getEmployeeCount());
