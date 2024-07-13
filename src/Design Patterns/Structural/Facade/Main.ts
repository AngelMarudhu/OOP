// The FACADE Pattern provides a simplified interface to a complex subsystem it hides the complexities of the subsystem & provides simple interface to the client let's explore it step by step

// we are going to use some unique analogy it's kinda different but it makes sense to understand what is exact meaning of FACADE

// SUBSYSTEMS ALL RE INDEPENDENT
// The subsystems (Doors, Engine, Lights, Wipers, Seats, Driver) are independent of each other and do not know about the facade class
// Each subsystem can be modified independently without affecting other subsystems

// first i mention all the subsystem of bus transportation

class Doors {
  open(): void {
    console.log(`Doors are opened sir/madam`);
  }
  close(): void {
    console.log(`Doors are closed let's ray ray`);
  }
}

class Engine {
  start(): void {
    console.log(`bus engine has started`);
  }
  stop(): void {
    console.log(`bus engine has stopped`);
  }
}

class Lights {
  turnOn(): void {
    console.log(`the lights are on`);
  }
  turnOff(): void {
    console.log(`the light are off`);
  }
}

class Wipers {
  clean(): void {
    console.log(`wind shield cleaned`);
  }
  cleanOff(): void {
    console.log(`wind shield cleaning off`);
  }
}

class Seats {
  private totalNumberOfSeats: number = 50;
  private filledSeats: number = 30;

  isSeatesAreFilled(): boolean {
    return this.filledSeats > this.totalNumberOfSeats / 2;
  }
}

class Driver {
  drive(): void {
    console.log(`driver starts the bus`);
  }
  stop(): void {
    console.log(`driver stopped the bus due to he burned out`);
  }
}

////// FACADE CLASS
//   The Facading class depends on the Doors, Engine, Lights, Wipers, Seats, and Driver classes
//   This dependency is necessary because the facade needs to interact with these subsystems to simplify the client’s interaction

// facade class acts as a single point of interaction for our client it helps us easier to change and managing the bugs

// encapsulation all the subsystem logic that means we ensuring client does not need to know about the internal working of all the subsystems

class Facading {
  private doors: Doors;
  private engine: Engine;
  private lights: Lights;
  private wiper: Wipers;
  private seat: Seats;
  private drive: Driver;

  constructor() {
    this.doors = new Doors();
    this.engine = new Engine();
    this.lights = new Lights();
    this.wiper = new Wipers();
    this.seat = new Seats();
    this.drive = new Driver();
  }

  timeToRide(): void {
    this.doors.open();
    console.log(`i hope you liked the seats and you've seated safely`);
    if (!this.seat.isSeatesAreFilled()) {
      throw new Error("we need more passenger waiting");
    }
    this.engine.start();
    this.wiper.clean();
    this.lights.turnOn();
    this.drive.drive();
  }

  timeToRideOff(): void {
    this.drive.stop();
    this.engine.stop();
    this.lights.turnOff();
    this.wiper.cleanOff();
    this.doors.open();
  }
}

//// here it is the client code

let busRide = new Facading();

try {
  busRide.timeToRide();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

//// LET'S SEE WHAT WILL HAPPEN WITHOUT FACADE CLASS
// 1) without facade client needs to interact with each subsystems and handling every feature of the bus and operation manually it's possible im not blaming but it's very tough
// 2) and one more important things before doing anything with subsystem client must know about all the subsystems working then only client can atleast do something in simple terms customer needs to know all the bus component works
// 3) for example OPEN THE DOOR customer must figure out how to open the door they need to find operate the door mechanism blah blah.....
// bullet points
// knowledge requirement about bus components
// lot of high risk errors chances to happen errors
// stress full experience to customer
// and one last important is inconvenient and uncomfortable, sometime there is chances to think who the hell is the guy designed like these bus transportation
