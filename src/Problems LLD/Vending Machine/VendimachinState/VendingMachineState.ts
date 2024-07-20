import { Coin } from "../Payment/Coin.js";
import { Note } from "../Payment/Note.js";
import { Product } from "../Product/Product.js";

export interface VendingMachineState {
  selectProduct(product: Product): void;
  insertCoin(coin: Coin): void;
  insertNote(note: Note): void;
  dispenseProduct(): void;
  returnChange(): void;
}
