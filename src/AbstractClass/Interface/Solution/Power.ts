import { PowerHub } from "./Interface/PowerHub.js";

export class Power implements PowerHub {
  constructor() {}
  powerOn(): void {
    console.log("turned on powerhub current");
  }
  powerOff(): void {
    console.log("turned off powerhub current");
  }
  Authorize(): void {
    console.log("authorized by superior");
  }
}
