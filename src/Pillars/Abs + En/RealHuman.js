import { Humans } from "./EncapsuleHuman.js";
class Marudhu extends Humans {
    lifeCount;
    constructor(color, gender, age, name, lifeCount) {
        super(color, gender, age, name);
        this.lifeCount = lifeCount;
    }
    whyHuman() {
        console.log(`${this.name} i'm out of the world at ${this.lifeCount}`);
        this.increamentAge();
        console.log(this.age);
    }
    updateName(newname) {
        this.changeName(newname);
    }
    gettingDetails() {
        this.getHumanDetails();
        console.log(`${this.name}`);
    }
}
let human = new Marudhu("fair", "male", 25, "marudhu", 65);
console.log(human.updateName("Madonna"));
console.log(human.whyHuman());
console.log(human.gettingDetails());
