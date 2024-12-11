export class ReturnChangeState {
    vending;
    constructor(vendingMachine) {
        this.vending = vendingMachine;
    }
    selectProduct(product) {
        console.log("here is your change");
    }
    insertCoin(coin) {
        console.log("here is your change");
    }
    insertNote(note) {
        console.log("here is your change");
    }
    dispenseProduct() {
        console.log("product already dispensed enjoy your snacks");
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
        this.vending.resetSelectedProduct();
        this.vending.setState(this.vending.getIdleState());
    }
}
