export class Payment {
    //   amount: number;
    //   currency: string;
    //   sender: string;
    //   constructor(amount: number, currency: string, sender: string) {
    //     this.amount = amount;
    //     this.currency = currency;
    //     this.sender = sender;
    //   }
    constructor() { }
    processingPayment() {
        console.log("processing payment from payment class");
    }
    // This implementation must handle all overload signatures
    // there is no depend on any return type that's all
    process(amount, currency, method) {
        if (currency === undefined && method === undefined) {
            console.log(`Processing amount: ${amount}`);
            return amount;
        }
        else if (method === undefined) {
            console.log(`Processing amount: ${amount} in currency: ${currency}`);
            return "amount";
        }
        else {
            console.log(`Processing amount: ${amount} in currency: ${currency} using method: ${method}`);
        }
    }
}
let out = new Payment();
let done = out.process(33);
console.log(done);
