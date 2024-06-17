import { Bus } from "./Bus.js";
import { Train } from "./Train.js";
import { Vehicle } from "./Vehicle.js";
class Main {
    train;
    bus;
    constructor() {
        this.bus = new Bus("bus");
        this.train = new Train("train");
    }
    //// we can access static abstract method
    checkingStaticAccessFromAbstract() {
        Vehicle.Common();
    }
    gettingDetails() {
        this.bus.MetalVehicle();
        this.train.MetalVehicle();
        //// it's possible to access normal method from abs class as like same manner
        this.bus.Normal();
    }
}
let out = new Main();
out.gettingDetails();
out.checkingStaticAccessFromAbstract();
