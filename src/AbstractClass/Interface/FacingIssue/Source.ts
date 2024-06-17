import { HouseCurrent } from "./HouseCurrent.js";
import { IndustryCurrent } from "./IndustryCurrent.js";
import { PowerHub } from "./PowerHub.js";

export class Source implements PowerHub, HouseCurrent, IndustryCurrent {
  constructor() {}
  Industry(): void {
    console.log("coming from industry current");
  }
  powerOn(): void {
    console.log("powerhub is turned on");
  }
  powerOff(): void {
    console.log("powerhub is turned off");
  }
  House(): void {
    console.log("coming from house");
  }
}

//// MILD DISADVANTAGE OF INTERFACE SIMPLE EXAMPLE WILL SEE THE SOLUTION IN THE SOLUTION FOLDER

// export interface PowerHub {
//   powerOn(): void;
//   powerOff(): void;
// }

// export interface HouseCurrent {
//   House(): void;
// }

// export interface IndustryCurrent {
//   Industry(): void;
// }

// i've already told you when comes to multi inheritance interface is the only solution let's see what's the disadvantage
// 1) first things i need to implement all the 3 interface method in single class yes it's possible multi inheritance
// 2) yep! marudhu we achieved multi inheritance that it's super good soo coool things
// 3) when we create different type of SOURCE CLASS the 3 interface methods need to be implement differently with different body it's not weird thing that's what interface method does like overridden like based on source house the three interface method will be executed differently
// 4) compiler time check means current class implement method and interface method names check the structure is correct or not during the compile time that's all
// 5) in the class what we do when some parent methods to execute just import and use it, in the behind scene just current subclass going to back parent check if has the method execute it or then going back one more parent like hierarchy checking but here interface broken the rules just write the interface just implement it that's all like go and check interface structure that's all if it's execute or showing error this isn't type of member something
// 6) for example in the C class when we does multi inheritance two child A AND B class connect with single class can't do that happens diamond problem but here two different class and we can use single interface both of the class it's un relatable each other it's one of the cool thing COMES TO DISADVANTAGE

//////////////////////////////////////////////////////////////////////////////////////////////////////
//// PLEASE GO BACK TO THE MAIN MODULE BECAUSE ALL THE SOURCE CLASS METHODS WERE IMPLEMENTED THERE I HAVE JUST CREATED THE INSTANCE OF THE SOURCE CLASS
