import { HumanDesign } from "./AbsHumanDesign.js";
export class Humans extends HumanDesign {
    name;
    skinColor;
    gender;
    age;
    constructor(color, gender, age, name) {
        super();
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.skinColor = color;
    }
    handMethod() {
        console.log(`${this.name} helping to lifting weights`);
    }
    legMethod() {
        console.log(`${this.name} helping to running and walking`);
    }
    eyesMethod() {
        console.log(`${this.name} helping to seeing the awesome world`);
    }
    getHumanDetails() {
        console.log(`Here is the human details ${this.name} ${this.age} ${this.skinColor} ${this.gender}`);
    }
    increamentAge() {
        this.age++;
    }
    changeName(newName) {
        this.name = newName;
    }
}
