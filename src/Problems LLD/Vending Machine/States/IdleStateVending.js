export class IdleState {
    vending;
    constructor(vendingMachine) {
        this.vending = vendingMachine;
    }
    selectProduct(product) {
        this.vending.setSelectedProduct(product);
        this.vending.setState(this.vending.getReadyState());
        console.log(`Your selected product ${product.name}`);
    }
    insertCoin(coin) {
        console.log(`please select the product first then comes next`);
    }
    insertNote(note) {
        console.log(`please select the product first then comes next`);
    }
    dispenseProduct() {
        console.log(`please select the product first then comes next`);
    }
    returnChange() {
        console.log(`please select the product first then comes next`);
    }
}
