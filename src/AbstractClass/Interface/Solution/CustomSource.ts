import { Power } from "./Power.js";

import { HouseCurrent } from "./Interface/HouseCurrent.js";
import { PowerHub } from "./Interface/PowerHub.js";
import { IndustryCurrent } from "./Interface/IndustryCurrent.js";

export class CustomSource {
  power: PowerHub | HouseCurrent | IndustryCurrent;
  constructor() {
    this.power = new Power();
  }

  turnOn(): void {
    this.power.powerOn();
  }
  turnOff(): void {
    this.power.powerOff();
  }

  upgradePower(types: HouseCurrent | IndustryCurrent): void {
    this.power = types;
  }
}
