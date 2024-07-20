import { Product } from "../Product/Product.js";

export class Inventory {
  private products: Product[] = [];

  constructor() {}

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProduct(): void {
    console.log(this.products);
  }
  ////// KISS rule keep it simple stupid rule so i mostly avoid to use builtin method
  removeProduct(productId: string): boolean {
    //// first we need to find that which product we need to delete we are going to use for loop you can findIndex builtin method as well it's your choice
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        index = i;
        //// once we find the index the no more loop we used lot of time in DSA so then break
        break;
      }
    }

    if (index !== -1) {
      let lastIndex = this.products.length - 1;

      if (index !== lastIndex) {
        ///// swapping happens you can use separate it like create two variable then assign cross vise it's also your choices
        [this.products[index], this.products[lastIndex]] = [
          this.products[lastIndex],
          this.products[index],
        ];
      }
      this.products.pop();
      return true;
    }
    return false;
  }
  getProduct(productId: string): Product | null {
    let findingProduct = null;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productId) {
        findingProduct = this.products[i];
        break;
      }
    }
    return findingProduct;
  }
}
