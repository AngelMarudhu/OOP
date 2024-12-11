import { Product } from "./Product.js";
export class Snacks extends Product {
    constructor(id, name, price) {
        super(id, name, price);
    }
    getPrice() {
        return this.price;
    }
}
