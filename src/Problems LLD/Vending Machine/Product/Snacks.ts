import { Product } from "./Product.js";

export class Snacks extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price);
  }
  getPrice(): number {
    return this.price;
  }
}
