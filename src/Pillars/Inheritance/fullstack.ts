import { SoftwareEngineer } from "./Main.js";
import { Backend } from "./backend.js";

// import { Flyer } from "./Main.js";
// import { Swimmer } from "./backend.js";

// class referencing {
//   ref: SoftwareEngineer;
//   //  refs: Backend;

//   constructor() {
//     // Subtype Polymorphism (Inclusion Polymorphism)
//     // A form of polymorphism where a subclass instance can be assigned to a superclass reference
//     // SoftwareEngineer ref = new Backend(...)

//     // Backend is a subtype of SoftwareEngineer. You can assign an instance of Backend to a variable of type SoftwareEngineer

//     /// solution for this problem ---> type assertion:

//     // Type Guards:
//     // Runtime checks used to narrow down the type of a variable within a certain block of code
//     //  if (ref instanceof Backend) { ... }.

//     // Type Assertion:
//     //  Explicitly telling the TypeScript compiler to treat a variable as a different type
//     // (ref as Backend).backendFramework.

//     //       thanks(): void {
//     //     let back = this.ref as Backend;
//     //     console.log(back.frameWork);
//     //   }

//     // only type of ref SE only determines what properties can be access never determine object backend
//     // ref stored at stack memory pointing to the backend objects who are SE props that can only you
//     // can access

//     this.ref = new Backend("marudhu", 3, "chennai", "node", "js");

//     ///// just think buddy if you declare a variable (refs) with a specific type (Backend), you cannot assign an instance of its superclass (SoftwareEngineer) to it
//     //// in javascript or whatever first we need to initialize all those props then you can access them
//     /// that's the rules but here think refs is backend it's subclass of SE and having some own stuffs isn't like language framework something you can't initialize through SE instances or object isn't how it's possible to access all those backend props i've already told you only type of refs only determines what properties can be access here refs is backend but we can't initialize full thing of backend so not possible to make it simple as it you can't call the backend constructor here

//     //// in simple example below class know what's the superclass props but superclass doesn't know what's the below class props simple simple

//     // this.refs = new SoftwareEngineer("marudhu", 2, "something");
//   }

//   thanks(): void {
//     let back = this.res as Backend;
//     console.log(back.frameWork);
//   }
// }

// let out = new referencing();
// out.thanks();

///// -----------------------------------------------------------------
///// MULTI INHERITANCE EXAMPLE

/// These errors occur because TypeScript (and JavaScript) does not support direct multiple inheritance. The extends keyword only allows a class to inherit from a single superclass

//// Syntax error: A class can only extend another class

/////// Attempting Multiple Inheritance not possible with class

// class FlyingSwimmingAnimal extends Swimmer {
//   flyspeed: number;
//   constructor(swimSpeed: number, flySpeed: number) {
//     super(swimSpeed);
//     this.flyspeed = flySpeed;
//   }
// }

// let flying = new FlyingSwimmingAnimal(22, 44);
