//// build ice cream factory with factory patterns

/// PRODUCT INTERFACE
interface iceCream {
  flavor(): string;
  price(): number;
}

/// CONCRETE PRODUCT (IMPLEMENTATION)
class vennilaIceCream implements iceCream {
  flavor(): string {
    return `this is vennila flavor ice cream`;
  }

  price(): number {
    return 400;
  }
}

class butterScotch implements iceCream {
  flavor(): string {
    return `this is butter scotch ice cream`;
  }
  price(): number {
    return 1000;
  }
}

//// future plans to add chocolate

class chocolate implements iceCream {
  flavor(): string {
    return `this is chocolate ice cream`;
  }

  price(): number {
    return 100;
  }
}

/// CREATOR ABS CLASS
abstract class iceCreamFactory {
  protected ice: iceCream; //// return type is ice cream interface type

  constructor() {
    this.ice = this.makingIceCream();
  }

  abstract makingIceCream(): iceCream;

  orderIceCream(): string {
    return `Ordered a ${this.ice.flavor()} ice cream for $${this.ice.price()}`;
  }
}

/// CONCRETE CREATOR
class vennilaFactory extends iceCreamFactory {
  makingIceCream(): iceCream {
    return new vennilaIceCream();
  }
}

class butterScotchFactory extends iceCreamFactory {
  makingIceCream(): iceCream {
    return new butterScotch();
  }
}

class chocolateFactory extends iceCreamFactory {
  makingIceCream(): iceCream {
    return new chocolate();
  }
}

// let vennilas = new vennilaFactory();
// console.log(vennilas.orderIceCream());

// let cholates = new chocolateFactory();
// console.log(cholates.orderIceCream());
