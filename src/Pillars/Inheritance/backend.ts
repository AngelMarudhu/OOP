import { SoftwareEngineer } from "./Main.js";

export class Backend extends SoftwareEngineer {
  frameWork: string;
  language: string;

  constructor(
    name: string,
    exp: number,
    native: string,
    frame: string,
    lang: string
  ) {
    super(name, exp, native);
    this.frameWork = frame;
    this.language = lang;
  }

  accessPrivate(): void {
    super.supering();
  }

  supering(): void {
    console.log("dsfasdfas");
  }
}

let madonna = new Backend("Madonna", 3, "Kerala", "Django", "Python");
let marudhu = new Backend("Marudhu", 3, "Chennai", "Nodejs", "Javascript");

madonna.accessPrivate();
marudhu.accessPrivate();

// let proto = new SoftwareEngineer("kdavul", 1000000, "everywhere");

// for (let props in madonna) {
//   if (madonna.hasOwnProperty(props) && !proto.hasOwnProperty(props)) {
//     console.log(props);
//   }
// }

//// ---------------------------------------------------------------------
//// MULTI INHERITANCE

// export class Swimmer {
//   swimSpeed: number;

//   constructor(swimSpeed: number) {
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`Swimming at speed of ${this.swimSpeed} km/h`);
//   }
// }
