import { Power } from "./Power.js";
import { House } from "./House.js";
import { Industry } from "./Industry.js";
///// SOLUTION FOR THE MULTI INHERITANCE WITHOUT ISSUE SEPARATE INTERFACE SEPARATE CLASS INTO SINGLE CLASS
export class CustomSource {
  /// one rule there functional programming doesn't matter where the function was placed the matter how ordered we triggered all of them keep that in mind when visualize

  /// typescript documentation: If we have a value that is a union type, we can only access members that are common to all types in the union why marudhu because js engine play safe role here no run time error that's why
  general: Power | House | Industry;
  constructor() {
    this.general = new Power();
    //// DYNAMIC CHANGE HAPPENS IN UPGRADE POWER SO CONSOLE IT THIS.GENERAL ONCE IN BROWSE YOU WILL UNDERSTAND WHAT'S HAPPENING
    //// this general is a reference type it's gives what we can access but new power() actual object it's gives which can able to we access simple formula if you know this formula you can easily visualize it
  }

  turnOn() {
    this.general.powerOn();
  }
  //// if you want to access uncommon method we need to use type GUARDS what does just check this object is an instance of specific important phrase specific class simple yes you're right this takes runtime decision based on actual object i hope you know what it is run time decisions just ensuring valid operations or not simple don't confuse
  nonCommon(): void {
    if (this.general instanceof Power) {
      this.general.Authorize();
    } else if (this.general instanceof House) {
      this.general.currentType();
    } else if (this.general instanceof Industry) {
      this.general.currentType();
    } else {
      console.log(
        "you're not a member of the class go check you interface or particular class"
      );
    }
  }

  /// SIMPLE IT'S DYNAMICALLY CHANGE THE POWERS SIMPLE INSTEAD INITIALIZE ALL THE METHOD JUST WRITE THE COMMON METHODS IMPLEMENT WITH DIFFERENT BODY'S THAT'S ALL HAVE IT YOU CAN ALSO INSTANTIATE ALL THE CLASS IN HERE USE ALL METHODS INDIVIDUALLY THAT'S UPTO YOU OKAY

  //// here noticed one thing we are changing type of current through parameter the function triggered from Main.ts file from that file we've sent a actual object based on actual object all those dame methods are connected at one source simple concept just take breath i'm ensure you will easily visualize it
  upgradePower(types: House | Industry): void {
    this.general = types;
  }
}

//// Common Methods and Properties
// If the union type PowerHub | HouseCurrent | IndustryCurrent is used, you can only call methods that are available on all three interfaces (PowerHub, HouseCurrent, and IndustryCurrent). If there are no common methods, TypeScript will not allow you to call any methods without additional type checks or type assertions

//// you may say hey marudhu we've different interface different implements with class it's also possible with abstract class you're right in abstract class doesn't possible to multiple inheritance however here it is full freedom to use it
