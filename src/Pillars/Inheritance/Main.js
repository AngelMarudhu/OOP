export class SoftwareEngineer {
    names;
    experience;
    native;
    constructor(name, exp, native) {
        this.names = name;
        this.experience = exp;
        this.native = native;
    }
    supering() {
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
