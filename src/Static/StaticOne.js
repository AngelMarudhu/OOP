import { Singleton } from "./Singleton.js";
class Static {
    // marudhu: Human;
    // madonna: Human;
    marudhu;
    nayan;
    constructor() {
        // this.marudhu = new Human("Marudhu", 25, "Black", false);
        // this.madonna = new Human("Madonna", 24, "white", false);
    }
    checkSingleton() {
        this.marudhu = Singleton.instanceAccess("Nayanthara");
        this.nayan = Singleton.instanceAccess("Madonna");
        console.log(this.marudhu);
    }
}
let out = new Static();
out.checkSingleton();
