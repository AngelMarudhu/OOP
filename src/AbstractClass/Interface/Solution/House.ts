import { HouseCurrent } from "./Interface/HouseCurrent.js";

export class House implements HouseCurrent {
  constructor() {}
  powerOn(): void {
    console.log("turned on house current");
  }
  powerOff(): void {
    console.log("turned off house current");
  }
  currentType(): void {
    console.log("2 phase current type");
  }
}
