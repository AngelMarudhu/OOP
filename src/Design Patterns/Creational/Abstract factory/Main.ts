/// ABS PRODUCT INTERFACE

// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes
// This approach ensures scalability and encapsulation, allowing for easy addition of new product variants without modifying existing code

interface IceCream {
  flavor(): string;
  price(): number;
}

interface StickType extends IceCream {
  sticktype(): string;
}

interface ScoopType extends IceCream {
  scooptype(): string;
}

interface ConeType extends IceCream {
  coneType(): string;
}

class vennilaSticky implements StickType {
  flavor(): string {
    return `this is vennila stick type ice cream`;
  }

  price(): number {
    return 1000;
  }

  sticktype(): string {
    return `bamboo stick`;
  }
}

//// PRODUCT IMPLEMENTAION (CONCRETE)
class chocolateScoop implements ScoopType {
  flavor(): string {
    return `this is chocolate scoop type ice cream`;
  }

  price(): number {
    return 2000;
  }

  scooptype(): string {
    return `plastic scoop `;
  }
}

class butterScotchCone implements ConeType {
  flavor(): string {
    return `this is butter scotch cone type ice cream`;
  }

  price(): number {
    return 3000;
  }

  coneType(): string {
    return `waffle cone`;
  }
}

class IceErrors extends Error {
  constructor(message: string) {
    super(message);
    this.name = "IceError";
  }
}

//// ABS FACTORY INTERFACE
/// provides an interface for creating families of related or dependent objects without specifying their concrete classes
interface IceCreamFactory {
  ///// providing interface of families of icecream related or dependent
  ///// we all know interface means no curly braces no body here also same we are specifed the icecream concrete classes without implementation interface return types all are interfaces that will take care
  makeStickIceCream(): StickType;
  makeScoopIceCream(): ScoopType;
  makeConeIceCream(): ConeType;
}

/// ABS FACTORY CONCRETE IMPLEMENTATION
class factoryForCreateStickTypeIceCream implements IceCreamFactory {
  makeStickIceCream(): StickType {
    return new vennilaSticky();
  }
  makeScoopIceCream(): ScoopType {
    throw new Error("you're at wrong place here only vennila stick ice");
  }
  makeConeIceCream(): ConeType {
    throw new Error("you're at wrong place here only vennila stick ice");
  }
}

class factoryForCreateScoopeIceCream implements IceCreamFactory {
  makeStickIceCream(): StickType {
    throw new Error("you can't get stick ice");
  }
  makeScoopIceCream(): ScoopType {
    return new chocolateScoop();
  }
  makeConeIceCream(): ConeType {
    throw new Error("you can't get cone ice");
  }
}

class factoryForCreateConeIceCream implements IceCreamFactory {
  makeStickIceCream(): StickType {
    throw new Error("go some where to get your stick ice");
  }
  makeScoopIceCream(): ScoopType {
    throw new Error("go somewhere to get you scoop ice");
  }
  makeConeIceCream(): ConeType {
    return new butterScotchCone();
  }
}

//// CLIENT CODES

function ordering(factory: IceCreamFactory): void {
  ///// one way to access exception handling errors we created error class instance of is runtime execution
  try {
    const sticky = factory.makeStickIceCream();
    console.log(
      `you ordered ${sticky.flavor()} and ${sticky.price()} and ${sticky.sticktype()}`
    );
  } catch (error) {
    if (error instanceof IceErrors) {
      console.log(error.message);
    }
  }
  //// ---------------------------------------------

  try {
    const scoopy = factory.makeScoopIceCream();
    if (scoopy) {
      console.log(
        `you ordered ${scoopy.flavor()} and ${scoopy.price()} and ${scoopy.scooptype()}`
      );
    } else {
      throw new Error("scoop ice not available");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  //// ---------------------------------------------------

  try {
    const conie = factory.makeConeIceCream();
    if (conie) {
      console.log(
        `you ordered ${conie.flavor()} and ${conie.price()} and ${conie.coneType()}`
      );
    } else {
      throw new Error("cone ice not available");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

let vennilafac = new factoryForCreateStickTypeIceCream();
ordering(vennilafac);

let cholatefac = new factoryForCreateScoopeIceCream();
// ordering(cholatefac);

let butterfac = new factoryForCreateConeIceCream();

////// this one observed my code above code violating interface segregation but this one really good but but above one helps us to understand abstract factory pattern choices yours

// interface StickIceCreamFactory {
//   makeStickIceCream(): StickType;
// }

// interface ScoopIceCreamFactory {
//   makeScoopIceCream(): ScoopType;
// }

// interface ConeIceCreamFactory {
//   makeConeIceCream(): ConeType;
// }

// /// ABS FACTORY CONCRETE IMPLEMENTATION
// class VanillaStickIceCreamFactory implements StickIceCreamFactory {
//   makeStickIceCream(): StickType {
//     return new vennilaSticky();
//   }
// }

// class ChocolateScoopIceCreamFactory implements ScoopIceCreamFactory {
//   makeScoopIceCream(): ScoopType {
//     return new chocolateScoop();
//   }
// }

// class ButterScotchConeIceCreamFactory implements ConeIceCreamFactory {
//   makeConeIceCream(): ConeType {
//     return new butterScotchCone();
//   }
// }

// //// CLIENT CODES

// function orderStickIceCream(factory: StickIceCreamFactory): void {
//   const iceCream = factory.makeStickIceCream();
//   console.log(`Ordered a ${iceCream.flavor()} with ${iceCream.sticktype()}`);
// }

// function orderScoopIceCream(factory: ScoopIceCreamFactory): void {
//   const iceCream = factory.makeScoopIceCream();
//   console.log(
//     `Ordered a ${iceCream.flavor()} with ${iceCream.scooptype()} scoops`
//   );
// }

// function orderConeIceCream(factory: ConeIceCreamFactory): void {
//   const iceCream = factory.makeConeIceCream();
//   console.log(`Ordered a ${iceCream.flavor()} in a ${iceCream.coneType()}`);
// }

// const vanillaStickFactory = new VanillaStickIceCreamFactory();
// orderStickIceCream(vanillaStickFactory);

// const chocolateScoopFactory = new ChocolateScoopIceCreamFactory();
// orderScoopIceCream(chocolateScoopFactory);

// const butterScotchConeFactory = new ButterScotchConeIceCreamFactory();
// orderConeIceCream(butterScotchConeFactory);
