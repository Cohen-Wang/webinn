

class Person {

    name : string;
    age : number;

    /**
     * 构造函数
     * @param name
     * @param age
     */
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     *
     */
    public sayName () {
        console.log(this.name);
    }

    /**
     *
     */
    private sayAge () {
        console.log(this.age);
    }
}


class Student extends Person {

    readonly tempName : 'Student';
    school : string;

    /**
     *
     */
    constructor (name, age, school) {
        super(name, age);
        this.school = school;
    }

    /**
     *
     */
    public saySchool () {
        console.log(this.school);
    }


}