//// we've already cracked what about abstract let's explore little more deep dive it's easy
//// still we can't make multiple inheritance not allowed we can't extend two abstract class into single derived or subclass as we know it's not possible buddy here it comes to help INTERFACE
//// first thing whatever we've create the methods in abstract class we've must override all the methods in the child or derived class or subclass isn't that's very first thing guys we've already covered what's overridden if you haven't check it out just go back to the polymorphism post done :)
export class Vehicle {
    //// abstract method always be nudity we can't add any body for abstract methods it's just giving information to child classes in simple there is no more curly braces done
    //   abstract MetalVehicle(): void {}
    //// if there is contain at least one abstract methods you should put the class into abstract
    names;
    constructor(name) {
        this.names = name;
    }
    //// abstract methods crate for overridden
    //// static method behavior is can't overridden not possible to create static method but you can implement it
    //// we can't make static method overridden in abstract class what abstract class it's just overridden of subclass providing the methods ot subclass must implementation
    //// but as we seen we can't overridden the static method isn't the how it's possible buddy not possible hahaha static is behalf of class constructor buddy's
    // static Common(): void;
    //// but we can implement the static method in abstract class it's good
    static Common() {
        console.log("abstract method common");
    }
    //// normal method in abs class
    Normal() {
        console.log("normal method from abs");
    }
}
//// Cannot create an instance or object of an abstract class not possible it's just method holder that's all
// let out = new Vehicle();
////// FINAL OUTPUT FOR REVISION IN SIMPLE PHRASES
/////// We must override all the methods in the child or derived class
////// Abstract methods must always be declared without a body
////// If a class contains at least one abstract method the class itself must be declared as abstract
///// Abs methods are created to be overridden
///// Static methods cannot be overridden
///// Cannot create an instance or object of an abstract class no curly and no body
