import { IndustryCurrent } from "./Interface/IndustryCurrent.js";

export class Industry implements IndustryCurrent {
  constructor() {}
  powerOn(): void {
    console.log("turn on industry current");
  }
  powerOff(): void {
    console.log("turn off industry current");
  }
  currentType(): void {
    console.log("3 phase current type");
  }
}
