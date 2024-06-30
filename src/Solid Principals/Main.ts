////// SOLID PRINCIPALS \\\\\\\

// Single Responsibility

// Issues:
// For example if we provide multiple responsibility for a single class it's okay what if our project became big in future we need to make some changes in particular methods and we've made already done bunch of overridden methods unfortunately our changes could affect the other ones without you knowing yes it's possible
// 2) In simple terms Single class doing multiple jobs no please don't do that
/// Harder to understand keep on our projects became big
/// Difficult to maintain i've already told you changes one affect others
/// Low reusability Harder to reuse parts of the class in other contexts and harder to find bugs

class Houses {
  cook() {
    console.log("Cooking in the kitchen");
  }

  sleep() {
    console.log("Sleeping in the bedroom");
  }

  entertain() {
    console.log("Watching TV in the living room");
  }
}

/// Solution:
/// Each class (Depend on your project) should have one sooper dooper specific jobs
/// Here each classes have single responsibility i hope how do you use all of them into single house class if you don't know please go back to our posts understand OOP

class Kitchen {
  cook() {
    console.log("Cooking in the kitchen");
  }
}

class Bedroom {
  sleep() {
    console.log("Sleeping in the bedroom");
  }
}

class LivingRoom {
  entertain() {
    console.log("Watching TV in the living room");
  }
}

class House {
  private kitchen: Kitchen;
  private bedroom: Bedroom;
  private livingRoom: LivingRoom;

  constructor() {
    this.kitchen = new Kitchen();
    this.bedroom = new Bedroom();
    this.livingRoom = new LivingRoom();
  }

  useKitchen() {
    this.kitchen.cook();
  }

  useBedroom() {
    this.bedroom.sleep();
  }

  useLivingRoom() {
    this.livingRoom.entertain();
  }
}

/// here Kitchen, Bedroom, and LivingRoom: Each class has a single responsibility

////// O ---> Open/Closed Principals (OCP)  \\\\\\\

// open ---> extend the class or implementation, easy to extend the class you can easily add new features and functionality
// closed --> modification happens with existing code

// Issues:
//// let's take previous analogy in a house bedroom, kitchen, living room, pooja room isn't we need to decorate all the room let's approach without open closed principal what we do usually just write a house class putting all the rooms write a logic inside of decorate function it's normal way of doing this

class Room {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  decorate() {
    if (this.type === "Kitchen") {
      //// logic
      console.log("decorating kitchen");
    } else if (this.type === "bedroom") {
      console.log("decorating bedroom");
    }
  }
}
// const kitchen = new Room("Kitchen");
// const bedroom = new Room("bedroom");

// kitchen.decorate(); // Output: decorating kitchen
// bedroom.decorate(); // Output: decorating bedroom

/// what if in future we are going to decorate pooja room we just find the room class and modifying (closed) the existing code structure hard to maintain the code might chances to change exist code

// Solution: you can use any of them inherit, poly, interface or abstract
//// Inheritance, polymorphism
// By creating new subclasses, we can extend the behavior of existing classes without modifying them

//// Interface, Abstract
// Define contracts that can be implemented or extended by other classes this will help us to solve this issue with simple steps we've already talked lot's of time must implementation no body no curly braces no logics

/// code is easier to maintain because new features can be added with minimal changes to existing code

interface Rooms {
  decorator(): void;
}

class Kitchens implements Rooms {
  decorator(): void {
    console.log("decorating kitchen");
  }
}

class Bedrooms implements Rooms {
  decorator(): void {
    console.log("decorating bedroom");
  }
}

//// if we need to decorate another room it's very easy just create a class implement the room decorate interface and provide own implementations how easy is this

class PoojaRoom implements Rooms {
  decorator(): void {
    console.log("decorating pooja rooms");
  }
}

class Housea {
  private rooms: Rooms[] = [];

  addRoom(room: Rooms): void {
    this.rooms.push(room);
  }

  decorateHouse(): void {
    this.rooms.forEach((room) => room.decorator());
  }
}

const house = new Housea();

const kitchen = new Kitchens();
const bedroom = new Bedrooms();
const poojaRoom = new PoojaRoom();

// Adding rooms to the house
house.addRoom(kitchen);
house.addRoom(bedroom);

//// later added for decoration
house.addRoom(poojaRoom);

// decorating
house.decorateHouse();

////// L ---> Liskov Substitution (LSP)  \\\\\\\ /// Behavioral Consistency /// Substitutability

//// ISSUES:
// 1) when child class cannot perform as the same action of parent class that time you will brake the LSP rules simple
// 2) child class should able to do all the process that everything parent class can do that's we called proper inheritance isn't
// 3) if child class didn't make it there is something happened you break the LSP principals
// 4) don't create new methods in child class without knowing the parent class that means no present in the parent class all the subclass should work interchangeably with the parent class you can overridden according to the child class (allowed polymorphism) don't create new method in simple terms all the subclass contract with parent class

/// note: Subclasses should be substitutable for their base (parent) classes

// APPROACH DIFFERENT ANALOGY FOR THIS ONE COZ EASY TO UNDERSTAND

class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  managing(): void {
    console.log(`${this.name} managing time`);
  }

  cook(): void {
    console.log("as a parent we know cooking");
  }
}

class childNayan extends Parent {
  constructor(name: string) {
    super(name);
  }

  managing(): void {
    console.log(`${this.name} managing time`);
  }

  cook(): void {
    console.log("i can cook what parent can");
  }
}

class childMarudhu extends Parent {
  constructor(name: string) {
    super(name);
  }
  /// don't create new methods in child class without knowing the parent class violating substitution
  code(): void {
    console.log("I write code");
  }

  managing(): void {
    console.log(`${this.name} managing time`);
  }
  /// // 3) if child class didn't make it there is something happened you break the LSP principals
  cook(): void {
    throw new Error("hey accessor i can't cook go do yourself");
  }
}

//// SOLUTION:
// we need contract you can also consider interface abs class instead of using parent classes that's more sooper easy
// 1) first rules behavior consistency ---> all subclass provide consistent behavior expected parent
// 2) Substitutability ----> don't create new method must work interchangeably parent to child and child to parent like interchange
// 3) we can easily make polymorphism overridden methods
// 4) robust inheritance

class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`${this.name} initialized`);
  }

  performTask() {
    console.log(`${this.name} performing task`);
  }

  cook() {
    console.log(`${this.name} cooking meal`);
  }
}

class childMadonna extends Human {
  constructor(name: string) {
    super(name); // Initialize the parent class
    console.log(`${this.name} initialized`);
  }

  performTask() {
    console.log(`${this.name} performing task`);
  }

  cook() {
    console.log(`${this.name} cooking meal`);
  }
}

class childGalGadot extends Human {
  constructor(name: string) {
    super(name); // Initialize the parent class
    console.log(`${this.name} initialized`);
  }

  performTask() {
    console.log(`${this.name} performing task`);
  }
  //// Behavioral Consistency -----> ChildGalGadot now provides reasonable alternative cooking ensuring it does not violate the behavior expected of the Human class
  cook() {
    console.log(
      `${this.name} i can't cook but you can order something on ordering app`
    );
  }
}

////// I -----> Interface Segregation (ISP)  \\\\\\\

// 1) one simple rules we don't force to use the method that they do not use that means in interface we bundled all of them for example sleep, cook, gaming it's contract isn't we must implement all of them where we implemented for in the kitchen class is possible to use gaming and sleep method it doesn't make sense that what they are saying simple do not use wasteful methods don't overthink about it
// 2) Break large interface chunk them more specific ones that will help us to make good contract
// 3) simple implementation client can implement the method what they want isn't

// Create specific interfaces to prevent forcing classes to implement unused methods

interface Roomss {
  cook(): void;
  sleep(): void;
  entertain(): void;
}

class Kitch implements Roomss {
  cook() {
    console.log("Cooking in the kitchen");
  }
  /// don't force the method to use coz we can't sleep in the kitchen but we forced to use so don't do that
  sleep() {
    throw new Error("Kitchen can't be used for sleeping");
  }

  entertain() {
    throw new Error("Kitchen can't be used for entertaining");
  }
}

class Bedroomss implements Roomss {
  cook() {
    throw new Error("Bedroom can't be used for cooking");
  }

  sleep() {
    console.log("Sleeping in the bedroom");
  }

  entertain() {
    throw new Error("Bedroom can't be used for entertaining");
  }
}

///////////// WITH INTERFACE SEGREGATION

// interface Cookable {
//   cook(): void;
// }

// interface Sleepable {
//   sleep(): void;
// }

// interface Entertainable {
//   entertain(): void;
// }

// class Kitchen implements Cookable {
//   cook() {
//     console.log("Cooking in the kitchen");
//   }
// }

// class Bedroom implements Sleepable {
//   sleep() {
//     console.log("Sleeping in the bedroom");
//   }
// }

// class LivingRoom implements Entertainable {
//   entertain() {
//     console.log("Entertaining in the living room");
//   }
// }

// const kitchen: Cookable = new Kitchen();
// kitchen.cook();

// const bedroom: Sleepable = new Bedroom();
// bedroom.sleep();

// const livingRoom: Entertainable = new LivingRoom();
// livingRoom.entertain();

////// D -----> Dependency Inversion Principle (DIP)  \\\\\\\

/// High level module ----> security system
/// Low level Module ---> sensors

/// High level module ---> House
/// low level module ---> Rooms

/// High level module ---> Payment processing system
/// low level module ---> Paypal, Stripe, etc...

// High level modules should not depend on low-level modules ---> which means do not create low level module instances(concrete class) directly into high level modules
// Do not rely on any specific implementation
// do not hardcode low level classes implementation directly in high level instead of passing as parameters
// High level module helps us to execute the low level actions(methods)
// Low level module helps us to implement the action (logics)
// high and low both depend on abstraction or interface
// our interface or abstraction class connects two low and high classes
// simple goal is reducing dependencies i hope you all know how interface and abs works if you don't please go go back to our recent posts

// note:High-level modules should depend on abstractions not on concrete implementations.

/// without DIP

// class SecuritySystem {
//   private doorSensor: DoorSensor;
//   private windowSensor: WindowSensor;

//   constructor() {
//// here direct initializing low module which means tight coupling don't do that
//     this.doorSensor = new DoorSensor();
//     this.windowSensor = new WindowSensor();
//   }

//   monitor() {
//// here high level module depends on some specific low module methods no dependency
//// for example if we need to add another sensor we need to change security system as well this violating open closed principal isn't that's why
//     this.doorSensor.detect();
//     this.windowSensor.detect();
//   }
// }

// // Low-level module
// class DoorSensor {
//   detect() {
//     console.log("Detecting door intrusion");
//   }
// }

// // Low-level module
// class WindowSensor {
//   detect() {
//     console.log("Detecting window intrusion");
//   }
// }

// const securitySystem = new SecuritySystem();
// securitySystem.monitor();

// Detecting door intrusion
// Detecting window intrusion

/// with DIP

interface Sensor {
  detecting(): void;
}

class DoorSensor implements Sensor {
  // depend on interface or abstraction
  detecting(): void {
    console.log("door sensor");
  }
}

class WindowSensor implements Sensor {
  detecting(): void {
    console.log("window sensor");
  }
}

class Security {
  // depend on interface or abstraction
  private sensors: Sensor[];
  //// passes as parameter don't hardcode implementation
  constructor(sensor: Sensor[]) {
    this.sensors = sensor;
  }

  checking(): void {
    for (let data of this.sensors) {
      data.detecting();
    }
  }
}

const door = new DoorSensor();
const windows = new WindowSensor();

const sensing: Sensor[] = [door, windows];

let Secure = new Security(sensing);

Secure.checking();
