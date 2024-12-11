export class DispenseState {
    vending;
    constructor(vendingMachine) {
        this.vending = vendingMachine;
    }
    selectProduct(product) {
        console.log("product already selected time to get your product");
    }
    insertCoin(coin) {
        console.log("product already selected time to get your product");
    }
    insertNote(note) {
        console.log("product already selected time to get your product");
    }
    dispenseProduct() {
        let selected = this.vending.getSelectedProduct();
        console.log(`here is your product enjoy your snacks ${selected?.name}`);
        this.vending.setState(this.vending.getReturnState());
    }
    returnChange() {
        console.log("product already selected time to get your product");
    }
}
