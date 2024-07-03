class singleTon {
  private static instance: singleTon;
  //// static used here because it depend on class not any instance of this classses
  //// he is the here of singleton class holds the instance of singleton classes

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
