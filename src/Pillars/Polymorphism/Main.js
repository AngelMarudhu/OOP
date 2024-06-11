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
        this.payment.processingPayment();
        this.credit.processingPayment();
        this.bitCoin.processingPayment();
        this.paypal.processingPayment();
    }
}
let out = new Main();
console.log(out);
out.overloading();
