import { Note } from "./Payment/Note.js";
import { IdleState } from "./States/IdleStateVending.js";
import { GetReadyState } from "./States/GetReadyState.js";
import { DispenseState } from "./States/DispenseState.js";
import { ReturnChangeState } from "./States/ReturnChangeState.js";
import { Snacks } from "./Product/Snacks.js";
import { Beverages } from "./Product/Beverages.js";
import { Inventory } from "./Inventory/Inventory.js";
export class VendingMachine {
    static instance;
    idle;
    getReady;
    dispense;
    currentState;
    returnState;
    inventory;
    payment = 0;
    selectedProduct;
    constructor() {
        this.idle = new IdleState(this);
        this.getReady = new GetReadyState(this);
        this.dispense = new DispenseState(this);
        this.returnState = new ReturnChangeState(this);
        this.currentState = this.idle;
        this.selectedProduct = null;
        this.inventory = new Inventory();
    }
    static getInstance() {
        if (!VendingMachine.instance) {
            VendingMachine.instance = new VendingMachine();
        }
        return VendingMachine.instance;
    }
    addProduct(product) {
        this.inventory.addProduct(product);
    }
    setState(state) {
        this.currentState = state;
    }
    getIdleState() {
        return this.idle;
    }
    getReadyState() {
        return this.getReady;
    }
    getDispenseState() {
        return this.dispense;
    }
    getReturnState() {
        return this.returnState;
    }
    selectProduct(product) {
        this.currentState.selectProduct(product);
    }
    insertCoin(coin) {
        this.currentState.insertCoin(coin);
    }
    insertNote(note) {
        this.currentState.insertNote(note);
    }
    disPenseProduct() {
        this.currentState.dispenseProduct();
    }
    returnChange() {
        this.currentState.returnChange();
    }
    setSelectedProduct(product) {
        this.selectedProduct = product;
    }
    getSelectedProduct() {
        return this.selectedProduct;
    }
    resetSelectedProduct() {
        this.selectedProduct = null;
    }
    addCoin(coin) {
        this.payment += coin.getPaying();
    }
    addNote(note) {
        this.payment += note.getPaying();
    }
    getTotalPayment() {
        return this.payment;
    }
    resetPayment() {
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
