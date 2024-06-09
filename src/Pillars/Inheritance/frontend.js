import { SoftwareEngineer } from "./Main.js";
class FrontEnd extends SoftwareEngineer {
    frontTech;
    language;
    constructor(name, exp, native, tech, lang) {
        super(name, exp, native);
        this.frontTech = tech;
        this.language = lang;
    }
    Nam(a, b) {
        if (b === undefined) {
            console.log("single parameter");
        }
        else {
            console.log("double parameter");
        }
    }
}
let marudhu = new FrontEnd("Marudhu", 1, "Neyveli", "React", "Javascript");
let nayan = new FrontEnd("Nayan", 2, "Chennai", "React", "Javascript");
marudhu.Nam("marudhu", "nayan");
//// check own instance of objects
// let baseInstance = new SoftwareEngineer("marudhu", 2, "india");
// for (let props in marudhu) {
//   if (marudhu.hasOwnProperty(props) && !baseInstance.hasOwnProperty(props)) {
//     console.log(props);
//   }
// }
