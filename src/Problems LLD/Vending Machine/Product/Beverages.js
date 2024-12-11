import { Product } from "./Product.js";
export class Beverages extends Product {
    constructor(id, name, price) {
        super(id, name, price);
    }
    getPrice() {
        return this.price;
    }
}
