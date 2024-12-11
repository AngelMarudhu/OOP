"use strict";
//// build ice cream factory with factory patterns
/// CONCRETE PRODUCT (IMPLEMENTATION)
/// subclasses are implement the icecream interface
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
/// PROVIDES AN INTERFACE FOR CREATING OBJECTS IN A SUPERCLASS
class iceCreamFactory {
  /// SUPERCLASS
  ///// superclass provide centralized template for creates ice cream objects
  ///// who are implement the icecream interface we can access all of the methods from here in single place but all the implemented class should follow the interface structure
  ice; /// interface providing abstract class(SUPERCLASS)
  constructor() {
    //// this one method for creating all the icecream(interface) product object
    this.ice = this.makingIceCream();
  }
  orderIceCream() {
    return `Ordered a ${this.ice.flavor()} ice cream for $${this.ice.price()}`;
  }
}
// <<<<<<< HEAD
// //// DON'T USE LIKE THIS DIRECTLY REFERENCE THE INTERFACE LIKE ABOVE
// =======
// //// DON'T USE LIKE THIS DIRECTLY, DO REFERENCE THE INTERFACE LIKE ABOVE
// >>>>>>> 5cd35c644ed59dedc0646f22bec7f1b8ec856ace
// // Abstract class implementing the interface
// abstract class IceCreamFactory implements IceCream {
//   abstract flavor(): string; // Abstract method to be implemented by subclasses
//   abstract price(): number; // Abstract method to be implemented by subclasses
//   orderIceCream(): string {
//     return `Ordered a ${this.flavor()} ice cream for $${this.price()}`;
//   }
// }
/// CONCRETE CREATOR
/// subclasses to alter the type of objects that will be created
/// Subclasses that implement the factory method helps to creates specific types of IceCream
class vennilaFactory extends iceCreamFactory {
  makingIceCream() {
    return new vennilaIceCream(); /// creates vennila icecream through abs superclass methods
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
/// Decoupling Object Creation: By using the Factory Method pattern, the client code that uses the factory method does not need to know the specific class of the object being created. It only interacts with the abstract creator and relies on subclasses to provide the actual implementation
// let vennilas = new vennilaFactory();
// console.log(vennilas.orderIceCream());
// let cholates = new chocolateFactory();
// console.log(cholates.orderIceCream());
// WITH FACTORY METHOD ADVANTAGE
// Creation of objects is centralized(superclass) in subclasses.
// Clients only interact with the abstract interface, reducing coupling.
