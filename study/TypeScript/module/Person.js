"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
        return this.name;
    };
    Person.prototype.sayAge = function () {
        console.log(this.age);
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
