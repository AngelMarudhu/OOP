import { Vehicle } from "./Vehicle.js";

export class Bus extends Vehicle {
  constructor(name: string) {
    super(name);
    this.names = name;
  }

  MetalVehicle(): void {
    console.log("metal vehicle" + " " + this.names);
  }
  EasyTransport(): void {
    console.log("bus is the easiest transportation");
  }
}
