import { Payment } from "./Payment.js";
export class Bitcoin extends Payment {
    constructor() {
        super();
    }
    processingPayment() {
        console.log("processing payment from Bitcoin class");
    }
}
