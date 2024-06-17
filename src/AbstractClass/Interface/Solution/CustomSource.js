import { Power } from "./Power.js";
export class CustomSource {
    power;
    constructor() {
        this.power = new Power();
    }
    turnOn() {
        this.power.powerOn();
    }
    turnOff() {
        this.power.powerOff();
    }
    upgradePower(types) {
        this.power = types;
    }
}
