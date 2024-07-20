import { VendingMachineState } from "./VendimachinState/VendingMachineState.js";
import { Coin } from "./Payment/Coin.js";
import { Note } from "./Payment/Note.js";
import { IdleState } from "./States/IdleStateVending.js";
import { GetReadyState } from "./States/GetReadyState.js";
import { DispenseState } from "./States/DispenseState.js";
import { ReturnChangeState } from "./States/ReturnChangeState.js";
import { Product } from "./Product/Product.js";
import { Snacks } from "./Product/Snacks.js";
import { Beverages } from "./Product/Beverages.js";
import { Inventory } from "./Inventory/Inventory.js";

export class VendingMachine {
  private static instance: VendingMachine;

  private idle: VendingMachineState;
  private getReady: VendingMachineState;
  private dispense: VendingMachineState;
  private currentState: VendingMachineState;
  private returnState: VendingMachineState;
  private inventory: Inventory;
  private payment: number = 0;
  private selectedProduct: Product | null;
  constructor() {
    this.idle = new IdleState(this);
    this.getReady = new GetReadyState(this);
    this.dispense = new DispenseState(this);
    this.returnState = new ReturnChangeState(this);
    this.currentState = this.idle;
    this.selectedProduct = null;
    this.inventory = new Inventory();
  }

  public static getInstance(): VendingMachine {
    if (!VendingMachine.instance) {
      VendingMachine.instance = new VendingMachine();
    }
    return VendingMachine.instance;
  }

  addProduct(product: Product): void {
    this.inventory.addProduct(product);
  }

  setState(state: VendingMachineState) {
    this.currentState = state;
  }
  getIdleState(): VendingMachineState {
    return this.idle;
  }
  getReadyState(): VendingMachineState {
    return this.getReady;
  }
  getDispenseState(): VendingMachineState {
    return this.dispense;
  }
  getReturnState(): VendingMachineState {
    return this.returnState;
  }

  selectProduct(product: Product): void {
    this.currentState.selectProduct(product);
  }

  insertCoin(coin: Coin) {
    this.currentState.insertCoin(coin);
  }

  insertNote(note: Note) {
    this.currentState.insertNote(note);
  }

  disPenseProduct(): void {
    this.currentState.dispenseProduct();
  }

  returnChange() {
    this.currentState.returnChange();
  }

  ////// --------------------------------------------------------

  setSelectedProduct(product: Product): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product | null | undefined {
    return this.selectedProduct;
  }

  resetSelectedProduct(): void {
    this.selectedProduct = null;
  }

  addCoin(coin: Coin): void {
    this.payment += coin.getPaying();
  }

  addNote(note: Note) {
    this.payment += note.getPaying();
  }

  getTotalPayment(): number {
    return this.payment;
  }

  resetPayment(): void {
    this.payment = 0;
  }
}

const vendingMachines = VendingMachine.getInstance();

const product = new Snacks("12", "bingo", 11);
const product1 = new Snacks("13", "kurkure", 13);
const drink = new Beverages("14", "CocoCola", 14);

vendingMachines.addProduct(product);
vendingMachines.addProduct(product1);
vendingMachines.addProduct(drink);

// vendingMachines.selectProduct(drink);

// vendingMachines.insertCoin(new Coin(5));
// vendingMachines.insertCoin(new Coin(5));
// vendingMachines.insertCoin(new Coin(4));

// vendingMachines.disPenseProduct();

// vendingMachines.resetPayment();

vendingMachines.selectProduct(product);

vendingMachines.insertNote(new Note(6));
vendingMachines.insertNote(new Note(6));

vendingMachines.disPenseProduct();

vendingMachines.returnChange();
