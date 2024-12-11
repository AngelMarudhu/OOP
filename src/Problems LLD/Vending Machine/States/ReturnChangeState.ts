import { Coin } from "../Payment/Coin.js";
import { Note } from "../Payment/Note.js";
import { Product } from "../Product/Product.js";
import { VendingMachineState } from "../VendimachinState/VendingMachineState.js";
import { VendingMachine } from "../VendingMachine.js";

export class ReturnChangeState implements VendingMachineState {
  private vending: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vending = vendingMachine;
  }
  selectProduct(product: Product): void {
    console.log("here is your change");
  }
  insertCoin(coin: Coin): void {
    console.log("here is your change");
  }
  insertNote(note: Note): void {
    console.log("here is your change");
  }
  dispenseProduct(): void {
    console.log("product already dispensed enjoy your snacks");
  }
  returnChange(): void {
    let selected = this.vending.getSelectedProduct();
    if (selected) {
      let change = this.vending.getTotalPayment() - selected.getPrice();
      console.log(`returning change ${change}`);
      this.vending.resetPayment();
      this.vending.setState(this.vending.getIdleState());
    } else {
      console.log(`sorry buddy you're not select any product`);
    }
    this.vending.resetSelectedProduct();
    this.vending.setState(this.vending.getIdleState());
  }
}
