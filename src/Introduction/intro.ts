export class Intro {
  //// class ----> it's rules you can't show anywhere for example human
  ///// human having some common things but objects can only show to the real world
  ///// this is simply represents template
  names: string | "marudhu";
  age: number;
  loves: string;
  data: number[];
  constructor(names: string, age: number, loves: string) {
    this.names = names;
    this.age = age;
    this.loves = loves;
    this.data = [];
  }

  uploads(values: number[]) {
    for (let i = 0; i < values.length; i++) {
      this.data.push(values[i]);
    }
  }
}

//// class ----> it's rules it's not a physical thing it's like a god rules
//// class -----> template of object simply logical constructor
//// class help us to defining the data types of what we are going to use
//// object ---> real world show up just like a real world car these are the things only
//// exist in a real world ----> physical reality
//// object ----> obj is instance of class that's going to occupy some space on the memory
//// instance ---> physical stuff of the class makes bonding with that classs
//// object ---> stored in a heap memory
//// reference variable ---> stored in a stack memory
// let out = new Intro("marudhu", 22, "thanks");

class Laptop {
  display: string;
  ram: string;
  processor: string;
  gpu: string;

  constructor(dis: string, rams: string, process: string, graphics: string) {
    this.display = dis;
    this.ram = rams;
    this.processor = process;
    this.gpu = graphics;
  }
  getDetails(): void {
    console.log("i'm the prototype of constructor get details function");
  }
}
//// check out the diagram once they will teach you what's the this and constructor everything
let MSI = new Laptop("1080p", "6gb", "intel", "intel");

console.log(MSI);
