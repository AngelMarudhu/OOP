"use strict";
//// build ice cream factory with factory patterns
/// CONCRETE PRODUCT (IMPLEMENTATION)
class vennilaIceCream {
    flavor() {
        return `this is vennila flavor ice cream`;
    }
    price() {
        return 400;
    }
}
class butterScotch {
    flavor() {
        return `this is butter scotch ice cream`;
    }
    price() {
        return 1000;
    }
}
//// future plans to add chocolate
class chocolate {
    flavor() {
        return `this is chocolate ice cream`;
    }
    price() {
        return 100;
    }
}
/// CREATOR ABS CLASS
class iceCreamFactory {
    ice; //// return type is ice cream interface type
    constructor() {
        this.ice = this.makingIceCream();
    }
    orderIceCream() {
        return `Ordered a ${this.ice.flavor()} ice cream for $${this.ice.price()}`;
    }
}
/// CONCRETE CREATOR
class vennilaFactory extends iceCreamFactory {
    makingIceCream() {
        return new vennilaIceCream();
    }
}
class butterScotchFactory extends iceCreamFactory {
    makingIceCream() {
        return new butterScotch();
    }
}
class chocolateFactory extends iceCreamFactory {
    makingIceCream() {
        return new chocolate();
    }
}
// let vennilas = new vennilaFactory();
// console.log(vennilas.orderIceCream());
// let cholates = new chocolateFactory();
// console.log(cholates.orderIceCream());
