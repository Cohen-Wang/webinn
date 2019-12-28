class Person {
    public name: string;
    public age: 23;

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    public sayName (): string {
        console.log(this.name);
        return this.name;
    }

    public sayAge (): number {
        console.log(this.age);
        return this.age;
    }
}

export {Person};