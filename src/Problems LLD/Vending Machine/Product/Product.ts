export abstract class Product {
  constructor(public id: string, public name: string, public price: number) {}

  getPrice(): number {
    return this.price;
  }
}
