import { Payment } from "./Payment.js";

export class Bitcoin extends Payment {
  constructor() {
    super();
  }

  processingPayment(): void {
    console.log("processing payment from Bitcoin class");
  }
}
