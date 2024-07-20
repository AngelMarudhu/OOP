import { Product } from "./Product.js";

export class Beverages extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price);
  }
  getPrice(): number {
    return this.price;
  }
}
