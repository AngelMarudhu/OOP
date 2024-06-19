import { CustomSource } from "./CustomSource.js";
import { House } from "./House.js";
import { Industry } from "./Industry.js";
//// PLEASE GO TO THE CUSTOM SOURCE MODULE
class Main {
    source;
    house;
    industry;
    constructor() {
        this.source = new CustomSource();
        this.house = new House();
        this.industry = new Industry();
    }
    changeCurrent() {
        this.source.upgradePower(this.industry);
        //// SENDING ACTUAL OBJECT LIKE INDUSTRY{} CONSOLE AT BROWSER FROM THE CUSTOM SOURCE MODULE PARAMETER TYPES
    }
    handleOn() {
        this.source.turnOn();
    }
    callUncommon() {
        this.source.nonCommon();
    }
}
let out = new Main();
out.changeCurrent();
out.handleOn();
out.callUncommon();
//   changeCurrent(): void {
//     this.source.upgradePower(this.house);
//   }
//   checking(): void {
//     console.log(this.house instanceof House);
//   }
