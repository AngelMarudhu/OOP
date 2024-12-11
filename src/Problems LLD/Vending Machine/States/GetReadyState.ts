import { Coin } from "../Payment/Coin.js";
import { Note } from "../Payment/Note.js";
import { Product } from "../Product/Product.js";
import { VendingMachineState } from "../VendimachinState/VendingMachineState.js";
import { VendingMachine } from "../VendingMachine.js";

export class GetReadyState implements VendingMachineState {
  private vending: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vending = vendingMachine;
  }

  selectProduct(product: Product): void {
    console.log(`you don't need to again select product go to your payment`);
  }

  insertCoin(coin: Coin): void {
    this.vending.addCoin(coin);
    console.log(`your coins ${coin.value}`);
    this.paymentStatus();
  }
  insertNote(note: Note): void {
    this.vending.addNote(note);
    console.log(`your notes added ${note.value}`);
    this.paymentStatus();
  }

  dispenseProduct(): void {
    console.log(
      `sorry buddy please make your payment first then you will get your product`
    );
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
  }

  paymentStatus() {
    const selected = this.vending.getSelectedProduct();

    if (selected && this.vending.getTotalPayment() >= selected.getPrice()) {
      this.vending.setState(this.vending.getDispenseState());
    }
  }
}
