//// build ice cream factory with factory patterns

//// you may heard this explanation but no one mapped this explanation with code let's explore it Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

//// chatgpt explanation: The Factory Method pattern defines an interface for creating an object but lets subclasses(abstract class subclasses so no chaos) decide which class to instantiate This pattern promotes loose coupling and adheres to the Open/Closed Principle, meaning classes should be open for extension but closed for modification

//// interview answer: The Factory Method pattern defines a way to create objects using a common interface, but delegates the actual creation to subclasses, allowing for flexibility and scalability

/// provides an interface for creating objects
/// provides an interface for creating objects in a superclass
/// subclasses to alter the type of objects that will be created

/// PRODUCT INTERFACE
/// PROVIDES AN INTERFACE FOR CREATING OBJECTS
interface iceCream {
  flavor(): string;
  price(): number;
}

/// CONCRETE PRODUCT (IMPLEMENTATION)
/// subclasses are implement the icecream interface
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
/// PROVIDES AN INTERFACE FOR CREATING OBJECTS IN A SUPERCLASS
abstract class iceCreamFactory {
  /// SUPERCLASS
  ///// superclass provide centralized template for creates ice cream objects
  ///// who are implement the icecream interface we can access all of the methods from here in single place but all the implemented class should follow the interface structure
  protected ice: iceCream; /// interface providing abstract class(SUPERCLASS)

  constructor() {
    //// this one method for creating all the icecream(interface) product object
    this.ice = this.makingIceCream();
  }

  abstract makingIceCream(): iceCream;

  orderIceCream(): string {
    return `Ordered a ${this.ice.flavor()} ice cream for $${this.ice.price()}`;
  }
}
//// DON'T USE LIKE THIS DIRECTLY REFERENCE THE INTERFACE LIKE ABOVE
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
  makingIceCream(): iceCream {
    return new vennilaIceCream(); /// creates vennila icecream through abs superclass methods
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

/// Decoupling Object Creation: By using the Factory Method pattern, the client code that uses the factory method does not need to know the specific class of the object being created. It only interacts with the abstract creator and relies on subclasses to provide the actual implementation

// let vennilas = new vennilaFactory();
// console.log(vennilas.orderIceCream());

// let cholates = new chocolateFactory();
// console.log(cholates.orderIceCream());

// WITH FACTORY METHOD ADVANTAGE
// Creation of objects is centralized(superclass) in subclasses.
// Clients only interact with the abstract interface, reducing coupling.
