import {Person} from './Person';

class Student extends Person {

    public school: string;

    constructor (name, age, school) {
        super(name, age);
        this.school = school;
    }

    public saySchool (): string {

        return this.school;
    }
}

export {Student};