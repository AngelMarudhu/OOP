import { Humans } from "./EncapsuleHuman.js";

class Marudhu extends Humans {
  private lifeCount: number;
  constructor(
    color: string,
    gender: string,
    age: number,
    name: string,
    lifeCount: number
  ) {
    super(color, gender, age, name);
    this.lifeCount = lifeCount;
  }

  public whyHuman(): void {
    console.log(`${this.name} i'm out of the world at ${this.lifeCount}`);
    this.increamentAge();
    console.log(this.age);
  }

  updateName(newname: string): void {
    this.changeName(newname);
  }

  public gettingDetails(): void {
    this.getHumanDetails();
    console.log(`${this.name}`);
  }
}

let human = new Marudhu("fair", "male", 25, "marudhu", 65);
console.log(human.updateName("Madonna"));
console.log(human.whyHuman());
console.log(human.gettingDetails());
