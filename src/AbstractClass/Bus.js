import { Vehicle } from "./Vehicle.js";
export class Bus extends Vehicle {
    constructor(name) {
        super(name);
        this.names = name;
    }
    MetalVehicle() {
        console.log("metal vehicle" + " " + this.names);
    }
    EasyTransport() {
        console.log("bus is the easiest transportation");
    }
}
