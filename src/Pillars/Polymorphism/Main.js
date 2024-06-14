import { Bitcoin } from "./Bitcoin.js";
import { Credit } from "./Credit.js";
import { Payment } from "./Payment.js";
import { Paypal } from "./Paypal.js";
class Main {
    payment;
    credit;
    bitCoin;
    paypal;
    constructor() {
        ///// METHOD OVERRIDING
        // The method to be executed is determined at run time based on the actual object type
        //// Inheritance allows you to base class to derived class all the public members of base class automatically became drived class as we all know but here you can override the base method within a child class with different implementaion which means methods name same but the body was different
        /// Derived Class Override:
        // Both CreditPayment and PaypalPayment classes extend Payment and override the processPayment method to provide their specific implementations which means the body only different depend on object the method name was same all the subclasses.
        //// compile time checking our typescript uses the reference type for compile time type checking just ensuring the type is safe simple
        //// runtime the actual object method or property can accessed runtime depends on the object
        //// compile time types all these:
        ////  this.bitCoin, this.payment, this.paypal, this.credit;
        //// run time types:
        //// new Bitcoin(), new Payment(), new Paypal(), new Credit(123);
        this.bitCoin = new Bitcoin();
        this.payment = new Payment();
        this.paypal = new Paypal();
        this.credit = new Credit(123);
    }
    //// HELPER TO FIND WHERE ALL THOSE INTERCONNECTED EACH OTHER INSTANCES
    // logging(instance: any, name: string): void {
    //   console.log(`prototype of ${name}`);
    //   let proto = Object.getPrototypeOf(instance);
    //   while (proto) {
    //     console.log(proto.constructor.name);
    //     proto = Object.getPrototypeOf(proto);
    //   }
    //   console.log("ending-----------------------------------");
    // }
    overloading() {
        // this.logging(this.payment, "Payment");
        // this.logging(this.credit, "Credit");
        // this.logging(this.bitCoin, "Bitcoin");
        // this.logging(this.paypal, "Paypal");
        //// behind the scenes how they are executed:
        // this.credit.processingPayment():
        // Compile-Time Type ---->  Payment
        // Runtime Type-----> Credit
        // Method Executed -----> Credit.processingPayment()
        /// which means a run time the actual object type is used to determine which method to call the reference type can be payment but but when comes to execution the decision is actual objects
        this.payment.processingPayment();
        this.credit.processingPayment();
        this.bitCoin.processingPayment();
        this.paypal.processingPayment();
    }
}
let out = new Main();
console.log(out);
out.overloading();
