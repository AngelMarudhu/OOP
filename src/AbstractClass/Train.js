import { Vehicle } from "./Vehicle.js";
export class Train extends Vehicle {
    constructor(name) {
        super(name);
        this.names = name;
    }
    MetalVehicle() {
        console.log("this is metal" + " " + this.names);
    }
    EasyTransport() {
        console.log("this is easy transportation");
    }
}
// let out = new Train("Train");
// out.EasyTransport();
