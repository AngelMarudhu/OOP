interface Observer {
  update(temps: number, winds: string, rains: string): void;
}

//// OBSERVABLE, OR SUBJECT YOU CAN USE ANYONE YOU MAY HEARD ABOUT MANY TIME WHEN OBSERVER PATTERN
class WeatherStation {
  private observers: Observer[] = [];
  private temp: number = 0;
  private windSpeed: string = "";
  private rainy: string = "";

  /// WHY USED OBSERVER AS A PARAMETER: using interfaces and types is a way to ensure that objects conform to a certain structure. When we define a method that takes an Observer interface as a parameter, we are enforcing that any object passed to this method must implement the Observer interface. This ensures type safety and consistency in the way the objects are used

  enqueueServer(observer: Observer): void {
    /// why we add because that's how we can track how many observers we have simple
    this.observers.push(observer);
  }

  dequeueServer(observer: Observer): void {
    let found = false;

    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === observer) {
        found = true;
      }
      if (found && i < this.observers.length - 1) {
        this.observers[i] = this.observers[i + 1];
      }
    }

    console.log(this.observers, "before");
    if (found) {
      this.observers.pop();
    }
    console.log(this.observers, "after");
  }

  notify(): void {
    for (let ovserves of this.observers) {
      ///// we are calling display update method from here because whenever happens update in weather station from the weathersetting method we are calling notify method and notify triggerd all the observer(display update methods) simple
      ovserves.update(this.temp, this.windSpeed, this.rainy);
    }
  }

  weatherSetting(temp: number, wind: string, rain: string): void {
    this.temp = temp;
    this.windSpeed = wind;
    this.rainy = rain;
    this.notify();
  }

  getServer(): void {
    console.log(this.observers);
  }
}

//// THESE TWO ARE OBSERVERS
class display implements Observer {
  update(temps: number, winds: string, rains: string): void {
    console.log(`web ----> ${temps} and ${winds} wind and ${rains} rain`);
  }
}

class mobile implements Observer {
  update(temps: number, winds: string, rains: string): void {
    console.log(`mobile ----> ${temps} and ${winds} wind and ${rains} rain`);
  }
}

let weather = new WeatherStation();

let dis = new display();
let mobiles = new mobile();

weather.enqueueServer(dis);
weather.enqueueServer(mobiles);

// weather.dequeueServer(dis);

weather.weatherSetting(100, "normal", "heavy"); /// before one

weather.getServer();

weather.weatherSetting(19999, "heavy", "slow"); /// update one
