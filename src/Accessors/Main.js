import { Accessor } from "./Accessor.js";
class Main extends Accessor {
    constructor(name, age, gender) {
        super(name, age, gender);
        //// first check the data check how it's react
        //// data is private property we can't access outside of the class and subclass we can't make it but it's possible via methods that method should be placed where private property initialized that's called encapsulation complexity of the system
        //// i've already told you this is data hiding
        /// this.data;
        //// we can access age properties because it's protected which means i've already told you possible to access subclass but not possible to access outside of class
        /// this.age;
    }
    dataFilling() {
        this.fillingData(["marudhu", "marudhupandiyan", "angel"]);
    }
}
// let out = new Main("Nayan", 11, "female");
// out.dataFilling();
// console.log(out.getDetails());
