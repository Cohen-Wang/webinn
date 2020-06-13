import Animal from "./Animal";

export default class Dog implements Animal {

    public eat (): void {
        console.log('123');
    }

}