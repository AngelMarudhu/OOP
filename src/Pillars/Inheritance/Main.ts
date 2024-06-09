export class SoftwareEngineer {
  names: string;
  experience: number;
  native: string;

  constructor(name: string, exp: number, native: string) {
    this.names = name;
    this.experience = exp;
    this.native = native;
  }

  supering(): void {
    console.log(this.native);
  }
}

//// ---------------------------------------------------------------------
//// MULTI INHERITANCE

// export class Flyer {
//   flySpeed: number;

//   constructor(flySpeed: number) {
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`Flying at speed of ${this.flySpeed} km/h`);
//   }
// }
