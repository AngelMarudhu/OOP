import { Payment } from "./Payment.js";
export class Credit extends Payment {
    cardNumber;
    constructor(card) {
        super();
        this.cardNumber = card;
    }
    processingPayment() {
        console.log("processing payment from credit class");
    }
}
