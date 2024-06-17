export class Human {
  name: string;
  age: number;
  skinTone: string;
  status: boolean;
  static population: number = 10;

  constructor(name: string, age: number, skinTone: string, status: boolean) {
    this.name = name;
    this.age = age;
    this.skinTone = skinTone;
    this.status = status;
    Human.population += 1;
  }
}

let out = new Human("duds", 22, "black", false);

class Engineers {
  static civil: string;
  static mechanical: string;
  computer: string;
  robotics: string;
  constructor() {
    this.computer = "Computer";
    this.robotics = "Robotics";
  }

  static {
    Engineers.civil = "Civil";
    Engineers.mechanical = "Mechanical";
  }

  anotherEngineeringClass(): void {
    console.log(
      `Here another engineering students ${this.computer} and ${this.robotics}`
    );
  }
  /// you can't access the non static member into static member if you want to access you need
  /// create a instance of objects because static held with human constructor classes but non static
  //// held with instance of class like human prototypes that's why
  //// like static method ask who you are buddy i'm non static member buddy so sorry no space for you
  /// you initialize here if you want to Initialize please make yourself static or create instance of
  //// your object that's the only way to getting space here done done

  /////// STATIC ENGINEERING STUDENT
  static engineeringClass(): void {
    // if (typeof this.anotherEngineeringClass !== "function") {
    //   console.error(
    //     "You are not a static method. You might need to create an instance of your object or make yourself static."
    //   );
    // }

    // console.log(this.robotics);

    // you cant use this because it requires an instance
    // but the function you are using it in does not depend on instances

    // you cannot access non static stuff without referencing their instances in
    // a static context

    // this.anotherEngineeringClass();

    let data = new Engineers();
    // if (typeof data.anotherEngineeringClasss !== "function") {
    //   console.error(
    //     "you do not belong to the instance object check that name of function"
    //   );
    // }

    data.anotherEngineeringClass();

    console.log(
      `static engineering students ${this.civil} and ${Engineers.mechanical}`
    );
  }
}

Engineers.engineeringClass();

let engineer = new Engineers();
// engineer.anotherEngineeringClass();
