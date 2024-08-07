//// Definition: Singleton Pattern is a creational design pattern that guarantees a class has only one instance and provides a global point of access to it

//// Global Access: The getInstance method can be called from anywhere in the application to get the single instance of the Singleton class this is what is meant by providing a global point of access

class singleTon {
  private static instance: singleTon;
  //// static used here because it depend on class not any instance of this classses
  //// he is here for singleton class holds the "instance of singleton"

  //// private constructor helps us to can't create instance outside of class
  private constructor() {}
  //// static helps us to use outside of class which means global access that means prevent direct instantiation
  static getInstance(): singleTon {
    if (!singleTon.instance) {
      singleTon.instance = new singleTon();
    }
    return singleTon.instance;
  }
}

let checkOne = singleTon.getInstance();
let checkTwo = singleTon.getInstance();

if (checkOne === checkTwo) {
  console.log(`proper singlet class`);
} else {
  console.log(`something happened your singleton class`);
}

/// Controlled Access: Only one instance is created, and it's controlled through a single access point.
/// Implement a reset capability by setting the instance to null, which allows creating a new instance when needed for future purpose
