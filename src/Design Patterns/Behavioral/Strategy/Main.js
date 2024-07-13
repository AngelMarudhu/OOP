"use strict";
///// more more similar with open/closed principal, don't touch the existing code concept if you don't know what it is please go back to solid principal post you will understand what it is okay
//// JUST IMPLEMENT ALL THE CONCRETE STRATEGIES WHAT WE HAVE
class SBIPayment {
    paying(amount) {
        return `your payment ${amount} is paid thanks for choosing SBI`;
    }
}
class KVBPayment {
    paying(amount) {
        return `your payment ${amount} is paid thanks for choosing KVB`;
    }
}
class ReserveBankPayment {
    paying(amount) {
        return `your payment ${amount} is paid thanks for choosing us`;
    }
}
class DemonstrateStrategy {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    assigningStrategy(strategy) {
        this.strategy = strategy;
    }
    executingParticularStrategyMethods(amount) {
        return this.strategy.paying(amount);
    }
}
const amount = 1000;
let sbi = new SBIPayment();
let kvb = new KVBPayment();
let reserve = new ReserveBankPayment();
let one = new DemonstrateStrategy(sbi);
console.log(one.executingParticularStrategyMethods(amount));
one.assigningStrategy(kvb);
console.log(one.executingParticularStrategyMethods(amount));
one.assigningStrategy(reserve);
console.log(one.executingParticularStrategyMethods(amount));
/// Strategy Interface (PaymentStrategy): Defines a method pay for payment processing.
// Concrete Strategies (SBIPayment, KVBPayment, IndianBankPayment): Implement the PaymentStrategy interface with specific logic for each bank
//                     RUNTIME DECISION(WHICH IS GOING TO EXECUTE DURING RUN TIME)
// Context Class (PaymentContext): Uses a PaymentStrategy to execute the payment Allows changing the strategy at runtime
/// WITHOUT STRATEGY PATTERN HERE IT IS EXECUTION
// Violating of Open/Closed Principle ---> Adding a new bank requires modifying the PaymentProcessor class
// reduced flexibility Harder to change the payment method at runtime if anything we need to add in future chances to change existing code isn't chances rise errors
// Tightly Coupled Code The "PaymentProcessor" class is responsible for multiple payment methods increasing complexity
// class PaymentProcessor {
//   pay(amount: number, bank: string): string {
//     if (bank === "SBI") {
//       return `Paid ${amount} using SBI Bank.`;
//     } else if (bank === "KVB") {
//       return `Paid ${amount} using KVB Bank.`;
//     } else if (bank === "IndianBank") {
//       return `Paid ${amount} using Indian Bank.`;
//     } else {
//       throw new Error("Unsupported bank");
//     }
//   }
// }
// // Client code
// const paymentProcessor = new PaymentProcessor();
// console.log(paymentProcessor.pay(1000, "SBI"));
// console.log(paymentProcessor.pay(1000, "KVB"));
// console.log(paymentProcessor.pay(1000, "IndianBank"));
