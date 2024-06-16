export class Accessor {
    name;
    age;
    gender;
    data;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.data = [];
    }
    fillingData(newData) {
        this.data = newData;
    }
    //// i hope you well known what is public you can acccess anywhere what if we don't mention in public explicitly what will happen it's automatically assigned default public when use public please please keep conscious because it's very dangerous everywhere concept
    getDetails() {
        console.log(`${this.name} age is ${this.age} my gender is ${this.gender} my favorite actress and my dream girls ${this.data.join(", #")}`);
    }
}
// let out = new Accessor("Marudhupandiyan", 25, "Male");
// out.fillingData(["madonna", "nayan", "galgadot", "isabella"]);
// out.getDetails();
/////// otherclasssamemodule we can't access private and protected file
// class otherClassSameModule {
//   access: Accessor;
//   constructor() {
//     this.access = new Accessor("Marudhupandiyan", 25, "Male");
//   }
//   public displayInfo(): void {
//     console.log(this.access.name);///not error done
///// cannot access protected property directly
//     console.log(this.access.age);
//   }
// }
// let outs = new otherClassSameModule();
// outs.displayInfo();
