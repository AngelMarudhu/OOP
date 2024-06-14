import { HumanDesign } from "./AbsHumanDesign.js";

export class Humans extends HumanDesign {
  protected name: string;
  private skinColor: string;
  private gender: string;
  protected age: number;
  constructor(color: string, gender: string, age: number, name: string) {
    super();
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.skinColor = color;
  }

  public handMethod(): void {
    console.log(`${this.name} helping to lifting weights`);
  }

  public legMethod(): void {
    console.log(`${this.name} helping to running and walking`);
  }

  public eyesMethod(): void {
    console.log(`${this.name} helping to seeing the awesome world`);
  }

  public getHumanDetails(): void {
    console.log(
      `Here is the human details ${this.name} ${this.age} ${this.skinColor} ${this.gender}`
    );
  }

  protected increamentAge(): void {
    this.age++;
  }

  protected changeName(newName: string): void {
    this.name = newName;
  }
}
