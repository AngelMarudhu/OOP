import { Human } from "./StaticTwo.js";
import { Singleton } from "./Singleton.js";

class Static {
  // marudhu: Human;
  // madonna: Human;
  marudhu!: Singleton;
  nayan!: Singleton;

  constructor() {
    // this.marudhu = new Human("Marudhu", 25, "Black", false);
    // this.madonna = new Human("Madonna", 24, "white", false);
  }

  checkSingleton(): void {
    this.marudhu = Singleton.instanceAccess("Nayanthara");
    this.nayan = Singleton.instanceAccess("Madonna");
    console.log(this.marudhu);
  }

  // greeting(): void {
  //   console.log(
  //     `hey ${this.marudhu.name} and ${this.madonna.name} what a pleasant surprise ${Human.population}`
  //   );
  // }
}

let out = new Static();
out.checkSingleton();
