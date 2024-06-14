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
    //// Function implementation is missing or not immediately following the declaration
    //// in typescript doesn't possible to make overloading as like instance method rather then you can handle these kinda cases using a single static method with type checks or optional parameters
    //// reason for static method not overloading;
    //// The main reason static method overloading is not supported in TypeScript (or JavaScript) stems from the fact that static methods are tied to the class itself rather than instances of the class.
    //// when Inheritance if a subclass also defines static methods with the same name, it can be unclear which method to call, leading to potential errors and unexpected behaviors
    /// STATIC METHOD CAN INHERITED BUT CAN'T OVERRIDDEN BECAUSE I'VE ALREADY TOLD YOU IT'S TIED UP WITH CLASS ITSELF NOT AN INSTANCE OF ACTUAL OBJECT THAT'S WHY WE CAN'T MAKE IT STATIC SIMPLY AVOID I'M NOT A INSTANCE PROPS I'M A CLASS PROPS SO YOU CAN'T TOUCH ME LIKE HAHA
    // static overLoading(): void; ///// CAN'T MAKE IT
    ///// you can use static method like this
    static overLoadingStatic(x) {
        if (typeof x === "number") {
            console.log(`Called with number: ${x}`);
        }
        else {
            console.log(`Called with string: ${x}`);
        }
    }
}
// let out = new Payment();
// let done = out.process(33);
// console.log(done);
