//// GOD GAVE SOME RULES FOR CREATING HUMAN CREATURES LET'S EXPLORE
//// SMALL DISCLAIMER IT'S JUST ONLY FOR LEARNING PURPOSE SO DON'T OVERTHINK GUYS

export abstract class HumanDesign {
  //// FOR EXAMPLE AS A HUMAN BELOW THE METHODS ARE USES 80% OF LIFE UN HUMAN LIFE

  abstract handMethod(): void;
  abstract legMethod(): void;
  abstract eyesMethod(): void;
  abstract getHumanDetails(): void;
}

//// For example one thing this is designer lever problem not an implementation problem for example act GOD as designer god says hey creator i need four methods that's done. all the implementation are your choice whatever you can put into the method doesn't matter to me i need four methods of all the humans that's all the implementation happens in encapsulation are which derived classes area along with some additional information itself done done god says hey abstraction class implementation is not your part just throw the method encapsulation will taking care of okay

//// encapsulation ----> implementation level problem solution bundling the methods and properties together within a class
//// abstraction -----> designer level problem without worrying about the implementation. For example: God says, "Hey creator, I need four methods for all humans. The implementation is up to you

//// 1) In a simple manner abstraction is a gaining information it's like knowing what methods a abstract class offers without diving into of how those methods are implemented it's just giving information to derived class for encapsulate all those methods with own implementation the encapsulation will take care of all those methods and private public all those mixed up that's called encapsulation

//// 2) These methods are defined what humans needed and can do but we don't need to what's the inside of methods and what does it's unnecessary the actual implementation of methods will differed to the class or implemented section which encapsulation (Humans class)

//// use Cases:
//// Abstract classes can include common methods and logic that can be shared by multiple subclasses reducing code duplication

// Abstract classes provide flexibility by allowing subclasses to have different implementations of the same methods simply same method with different implementation memory management

// This makes it easier to extend and maintain the code as you can add new subclasses with different behaviors without modifying existing code super option

//// problem with normal structure without abstract class:

/// Everything is bundled into a single class making it less clear which methods are general for all humans it's kinda makes confuse us with abstract class we can easily define which methods are common things to do....

/// If you need another type of human with different behaviors (for example a Doctor with treatPatient method) you would end up duplicating code there's happens lot's of duplicating

//// we can't initialize the abstract class but we can use it in derived classes
//// let out = new HumanDesign();
