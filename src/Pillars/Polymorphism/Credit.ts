import { Payment } from "./Payment.js";

export class Credit extends Payment {
  cardNumber: number;

  constructor(card: number) {
    super();
    this.cardNumber = card;
  }

  processingPayment(): void {
    console.log("processing payment from credit class");
  }
}
