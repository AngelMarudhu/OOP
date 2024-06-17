import { CustomSource } from "./CustomSource.js";
import { House } from "./House.js";
import { Industry } from "./Industry.js";

class Main {
  source: CustomSource;
  house: House;
  industry: Industry;
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

  changeCurrent(): void {
    this.source.upgradePower(this.house);
  }

  //   checking(): void {
  //     console.log(this.house instanceof House);
  //   }
}

let out = new Main();
out.changeCurrent();
out.handleOn();
out.handleOff();
// out.checking();
