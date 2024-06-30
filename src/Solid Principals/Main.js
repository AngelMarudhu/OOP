"use strict";
////// SOLID PRINCIPALS \\\\\\\
// Single Responsibility
// Issues:
// For example if we provide multiple responsibility for a single class it's okay what if our project became big in future we need to make some changes in particular methods and we've made already done bunch of overridden methods unfortunately our changes could affect the other ones without you knowing yes it's possible
// 2) In simple terms Single class doing multiple jobs no please don't do that
/// Harder to understand keep on our projects became big
/// Difficult to maintain i've already told you changes one affect others
/// Low reusability Harder to reuse parts of the class in other contexts and harder to find bugs
class House {
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
////// O ---> Open/Closed Principals (OCP)  \\\\\\\
// open ---> extend the class, easy to extend the class you can easily add new features and functionality
// closed --> modification happens with existing code
// Issues:
//// let's take previous analogy in a house bedroom, kitchen, living room, pooja room isn't we need to decorate all the room let's approach without open closed principal what we do usually just write a house class putting all the rooms write a logic inside of decorate function it's normal way of doing this
class Room {
    type;
    constructor(type) {
        this.type = type;
    }
    decorate() {
        if (this.type === "Kitchen") {
            console.log("decorating kitchen");
        }
        else if (this.type === "bedroom") {
            console.log("decorating bedroom");
        }
    }
}
class Kitchens {
    decorator() {
        console.log("decorating kitchen");
    }
}
class Bedrooms {
    decorator() {
        console.log("decorating bedroom");
    }
}
//// if we need to decorate another room it's very easy just create a class implement the room decorate interface and provide own implementations how easy is this
class PoojaRoom {
    decorator() {
        console.log("decorating pooja rooms");
    }
}
////// L ---> Liskov Substitution (LSP)  \\\\\\\
//// ISSUES:
// 1) when child class cannot perform as the same action of parent class that time you will brake the LSP rules simple
// 2) child class should able to do all the process that everything parent class can do that's we called proper inheritance isn't
// 3) if child class didn't make it there is something happened you break the LSP principals
// 4) don't create new methods in child class without knowing the parent class that means no present in the parent class all the subclass should work interchangeably with the parent class you can overridden according to the child class (allowed polymorphism) don't create new method in simple terms all the subclass contract with parent class
// APPROACH DIFFERENT ANALOGY FOR THIS ONE COZ EASY TO UNDERSTAND
class Parent {
    name;
    constructor(name) {
        this.name = name;
    }
    loving() {
        console.log(`${this.name} loving all the humans`);
    }
    cook() {
        console.log("as a parent we know cooking");
    }
}
class childNayan extends Parent {
    constructor(name) {
        super(name);
    }
    loving() {
        console.log(`${this.name} loving all the humans nayan class`);
    }
    cook() {
        console.log("i can cook what parent can");
    }
}
class childMarudhu extends Parent {
    constructor(name) {
        super(name);
    }
    /// don't create new methods in child class without knowing the parent class violating substitution
    code() {
        console.log("I write code");
    }
    loving() {
        console.log(`${this.name} loving all the humans nayan class`);
    }
    /// // 3) if child class didn't make it there is something happened you break the LSP principals
    cook() {
        throw new Error("hey accessor i can't cook go do yourself");
    }
}
//// SOLUTION:
// we need contract you can also consider interface abs class instead of using parent classes that's more sooper easy
// 1) first rules behavior consistency ---> all subclass provide consistent behavior expected parent
// 2) Substitutability ----> don't create new method must work interchangeably parent to child and child to parent like interchange
// 3) we can easily make polymorphism overridden methods
class Human {
    name;
    constructor(name) {
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
    constructor(name) {
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
    constructor(name) {
        super(name); // Initialize the parent class
        console.log(`${this.name} initialized`);
    }
    performTask() {
        console.log(`${this.name} performing task`);
    }
    //// Behavioral Consistency -----> ChildGalGadot now provides reasonable alternative cooking ensuring it does not violate the behavior expected of the Human class
    cook() {
        console.log(`${this.name} i can't cook but you can order something on ordering app`);
    }
}
class Kitch {
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
class Bedroomss {
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
class DoorSensor {
    detecting() {
        console.log("door sensor");
    }
}
class WindowSensor {
    detecting() {
        console.log("window sensor");
    }
}
class Security {
    sensors;
    constructor(sensor) {
        this.sensors = sensor;
    }
    checking() {
        for (let data of this.sensors) {
            data.detecting();
        }
    }
}
const door = new DoorSensor();
const windows = new WindowSensor();
const sensing = [door, windows];
let Secure = new Security(sensing);
Secure.checking();
