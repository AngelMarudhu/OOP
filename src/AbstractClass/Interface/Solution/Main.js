import { CustomSource } from "./CustomSource.js";
import { House } from "./House.js";
import { Industry } from "./Industry.js";
class Main {
    source;
    house;
    industry;
    constructor() {
        this.source = new CustomSource();
        this.house = new House();
        this.industry = new Industry();
    }
    handleOn() {
        this.source.turnOn();
    }
    handleOff() {
        this.source.turnOff();
    }
    changeCurrent() {
        this.source.upgradePower(this.house);
    }
}
let out = new Main();
out.changeCurrent();
out.handleOn();
out.handleOff();
// out.checking();
