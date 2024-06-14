import { Humans } from "./EncapsuleHuman.js";
//// it's just normal instantiation so i hope you all known what's happening if you don't just go back to our previous posts
class Marudhu extends Humans {
    lifeCount;
    constructor(color, gender, age, name, lifeCount) {
        super(color, gender, age, name);
        this.lifeCount = lifeCount;
    }
    whyHuman() {
        console.log(`${this.name} i'm out of the world at ${this.lifeCount}`);
        /// if we put age 25 then out method will call the increament age method increament by plus 1
        this.increamentAge();
        //// if age is private we can't access here because private only for that class not for anyone
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
