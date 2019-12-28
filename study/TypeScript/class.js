var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    /**
     * 构造函数
     * @param name
     * @param age
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     *
     */
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    /**
     *
     */
    Person.prototype.sayAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    /**
     *
     */
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    /**
     *
     */
    Student.prototype.saySchool = function () {
        console.log(this.school);
    };
    return Student;
}(Person));
