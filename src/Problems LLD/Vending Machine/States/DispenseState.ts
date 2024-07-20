import { Coin } from "../Payment/Coin.js";
import { Note } from "../Payment/Note.js";
import { Product } from "../Product/Product.js";
import { VendingMachineState } from "../VendimachinState/VendingMachineState.js";
import { VendingMachine } from "../VendingMachine.js";

export class DispenseState implements VendingMachineState {
  private vending: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vending = vendingMachine;
  }
  selectProduct(product: Product): void {
    console.log("product already selected time to get your product");
  }
  insertCoin(coin: Coin): void {
    console.log("product already selected time to get your product");
  }
  insertNote(note: Note): void {
    console.log("product already selected time to get your product");
  }
  dispenseProduct(): void {
    let selected = this.vending.getSelectedProduct();
    console.log(`here is your product enjoy your snacks ${selected?.name}`);
    this.vending.setState(this.vending.getReturnState());
  }
  returnChange(): void {
    console.log("product already selected time to get your product");
  }
}
