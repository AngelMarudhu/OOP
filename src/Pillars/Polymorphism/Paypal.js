import { Payment } from "./Payment.js";
export class Paypal extends Payment {
    constructor() {
        super();
    }
    processingPayment() {
        console.log("processing payment from Paypal class");
    }
}
