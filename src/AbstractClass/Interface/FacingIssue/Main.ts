import { HouseCurrent } from "./HouseCurrent.js";
import { PowerHub } from "./PowerHub.js";
import { Source } from "./Source.js";

////// please go to the PowerHub module you get all the detailed explanation about INTERFACES

class Main {
  source: PowerHub;
  house: HouseCurrent;

  constructor() {
    this.source = new Source();
    this.house = new Source();
  }

  handling(): void {
    this.source.powerOn(); // powerhub is turned on
    this.source.powerOff(); // powerhub is turned off
    this.house.House(); // coming from house
  }

  handlingTwo(): void {
    this.house.powerOff(); // powerhub is turned off
  }
}

let out = new Main();
out.handling();
out.handlingTwo();

///// DISADVANTAGE

// powerhub having 2 methods poweron and poweroff what if housecurrent also having the same poweroff method did you have any idea what will happen let's see

// the powerhub was turned off what to is it right thing we can shutdown the powerhub power through house current method is it right thing buddy definitely not fun thing the superior turned on the powerhub but in house current manager turned of the powerhub current what a fun thing

// why this is happening because please read the powerhub commands disadvantage section because in typescript only checking the type of structure that's all in interface doesn't have run time check polymorphism if have it we can easily change the execution we've already did in the polymorphism section overridden depend on runtime polymorphism execution which method is it yes let's see what is the solution of the disadvantage is separate classes for individual interfaces then implement all the classes into single entity which means single class that's would be super cool thing seee ya at solution folder
