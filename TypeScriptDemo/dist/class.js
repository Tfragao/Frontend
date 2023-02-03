"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id, _Employee_name, _Employee_address;
class Employee {
    constructor(id, name, address) {
        // In case you dont initialize the variable put ! in front of it
        /* id!: number;
        name!: string;
        address!: string; */
        _Employee_id.set(this, void 0); //# native synthax for creating private fields in Js
        _Employee_name.set(this, void 0);
        _Employee_address.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        __classPrivateFieldSet(this, _Employee_name, name, "f");
        __classPrivateFieldSet(this, _Employee_address, address, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Employee_name, "f");
    }
    getAddress() {
        return __classPrivateFieldGet(this, _Employee_address, "f");
    }
    getNameWithAddress() {
        return `${this.getName()} stays at ${this.getAddress()}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    //setters and getters
    getId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    setId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap(), _Employee_name = new WeakMap(), _Employee_address = new WeakMap();
/* let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "Highway 71"; */
let john = new Employee(1, "John", "Highway 71");
console.log(john.getNameWithAddress());
//john.setId(100);
console.log(john);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.getName()} is a manager at ${this.getAddress()}`;
    }
}
let mike = new Manager(1, "Mike", "Bolueta drive");
console.log(mike.getNameWithAddress());
//static methods
console.log(Employee.getEmployeeCount());
//# sourceMappingURL=class.js.map