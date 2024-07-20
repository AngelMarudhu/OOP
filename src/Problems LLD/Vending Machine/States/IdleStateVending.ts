import { Coin } from "../Payment/Coin.js";
import { Note } from "../Payment/Note.js";
import { Product } from "../Product/Product.js";
import { VendingMachineState } from "../VendimachinState/VendingMachineState.js";
import { VendingMachine } from "../VendingMachine.js";

export class IdleState implements VendingMachineState {
  private vending: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vending = vendingMachine;
  }
  selectProduct(product: Product): void {
    this.vending.setSelectedProduct(product);
    this.vending.setState(this.vending.getReadyState());
    console.log(`Your selected product ${product.name}`);
  }
  insertCoin(coin: Coin): void {
    console.log(`please select the product first then comes next`);
  }
  insertNote(note: Note): void {
    console.log(`please select the product first then comes next`);
  }
  dispenseProduct(): void {
    console.log(`please select the product first then comes next`);
  }
  returnChange(): void {
    console.log(`please select the product first then comes next`);
  }
}
