//////// different class same interface
// export interface Marudhu {
//   living(): void;
//   love(): void;
// }

export interface Marudhu {
  // can't use STATIC methods interface because interface means without body and inherited methods and method overridden but static you should implement with curly braces and can't be inherited & can't overridden it should need body to use it static methods so no possible simple explanation you can implement it with curly braces and call the static method also same as it is done:)
  //   static thanks(): void;

  living(): void;
}

export interface Nayan {
  loving(): void;

  another: Marudhu;
}

export interface Madonna extends Marudhu, Nayan {
  madonna(): void;
}

///// you can extend the interface when you implement the madonna interface all the other marudhu and nayan methods are also you should implement them

//// simple interface Madonna { //// like this you interface transformed
//   living(): void;
//   loving(): void;
//   madonna(): void;
// }

///// NESTED INTERFACE IS ALLOWED IN TYPESCRIPT NOT LIKE A JAVA EXECUTION MANNER IT'S KIND KEY VALUE PAIR MANNER SO EASY TO UNDERSTAND THINGS

// interface Address {
//   street: string;
//   city: string;
//   zipCode: string;
// }

// interface Person {
//   name: string;
//   age: number;
//   address: Address; // Nested interface
// }

// const person: Person = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     zipCode: "12345",
//   },
// };

// console.log(person);
