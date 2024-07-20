export class GetReadyState {
    vending;
    constructor(vendingMachine) {
        this.vending = vendingMachine;
    }
    selectProduct(product) {
        console.log(`you don't need to again select product go to your payment`);
    }
    insertCoin(coin) {
        this.vending.addCoin(coin);
        console.log(`your coins ${coin.value}`);
        this.paymentStatus();
    }
    insertNote(note) {
        this.vending.addNote(note);
        console.log(`your notes added ${note.value}`);
        this.paymentStatus();
    }
    dispenseProduct() {
        console.log(`sorry buddy please make your payment first then you will get your product`);
    }
    returnChange() {
        let selected = this.vending.getSelectedProduct();
        if (selected) {
            let change = this.vending.getTotalPayment() - selected.getPrice();
            console.log(`returning change ${change}`);
            this.vending.resetPayment();
            this.vending.setState(this.vending.getIdleState());
        }
        else {
            console.log(`sorry buddy you're not select any product`);
        }
    }
    paymentStatus() {
        const selected = this.vending.getSelectedProduct();
        if (selected && this.vending.getTotalPayment() >= selected.getPrice()) {
            this.vending.setState(this.vending.getDispenseState());
        }
    }
}
