export class Singleton {
    static instance = null;
    names;
    constructor(names) {
        this.names = names;
    }
    //// IMPLEMENTED INTO STATIC ONE SPACE
    //// WHY STATIC USED FOR SINGLETON CLASS TEMPLATE
    // Because it's static it's shared across all instances of the class ensuring that only one instance of the class is ever created
    // The static method provides a global access point to the single instance of the class which means you don't need to create new instances of the class everywhere in your code instead you access the single instance through the static method it's ensuring
    // By ensuring only one instance of the class is created you save memory compared to creating multiple instances of the same class memory management
    //// WHY NOT INSTANCE MANNER
    // If you were to use instances directly by creating new instances of the class you would lose the guarantee of having a single instance each time you create a new instance using new a completely new object is created yes that's why we do not use the instance manner
    static instanceAccess(newValue) {
        // If #instance is null (which is a falsy value), !Singleton.#instance will be true.
        // If #instance holds an instance of the class (which is a truthy value), !Singleton.#instance will be false.
        // Condition Check: if (!Singleton.#instance) evaluates to true because !null is true.
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(newValue);
        }
        return Singleton.instance;
    }
}
