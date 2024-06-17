import { Vehicle } from "./Vehicle.js";

export class Train extends Vehicle {
  constructor(name: string) {
    super(name);
    this.names = name;
  }

  MetalVehicle(): void {
    console.log("this is metal" + " " + this.names);
  }
  EasyTransport(): void {
    console.log("this is easy transportation");
  }
}

// let out = new Train("Train");
// out.EasyTransport();
