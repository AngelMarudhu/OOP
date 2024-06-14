import { HumanDesign } from "./AbsHumanDesign.js";
//// encapsulation is more implementation and more on the internal working and how those process containing information and how to make more secure the states and props stuffs remember these things before diving into encapsulation
//// private property is called data hiding
//// with the help of access these private property like getter setter are called encapsulation like here getHumandetails() because it's accessed all those properties
//// encapsulation in containing information it's wrapping all the datas and methods that operate on the data into single unit or entity and along with data hiding blah blah capsulated with single unit
//// in encapsulation section putting all the complex logic and some stuff and hiding the data from outside world with private public put it into single class that's called encapsulation
//// encapsulation helps us to managing all implementation details and providing the details more more clear structure
//// encapsulation : containing information and one thing i've already told you encapsulation is implementation lever problem and "hiding complexity of the system don't confuse with data hiding okay"
/// encapsulation if anything changes happens in internal implementation it's can be made without affect outside code--> maintainability
// Use private to hide data from outside access controlled manner
// Use protected to allow access within the class and its subclasses allows only subclasses
// Use public to expose methods and properties for external interaction anywhere like global
export class Humans extends HumanDesign {
    /// Private property: Cannot be accessed directly from outside the class
    name;
    skinColor;
    gender;
    age;
    constructor(color, gender, age, name) {
        super();
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.skinColor = color;
    }
    //// from abstraction classes methods
    handMethod() {
        console.log(`${this.name} helping to lifting weights`);
    }
    legMethod() {
        console.log(`${this.name} helping to running and walking`);
    }
    eyesMethod() {
        console.log(`${this.name} helping to seeing the awesome world`);
    }
    getHumanDetails() {
        console.log(`Here is the human details ${this.name} ${this.age} ${this.skinColor} ${this.gender}`);
    }
    increamentAge() {
        this.age++;
    }
    changeName(newName) {
        this.name = newName;
    }
}
