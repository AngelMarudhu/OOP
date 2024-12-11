import { VehicleTypes } from "../Vehicles/Vehicle.js";
import { ParkingSpot } from "../ParkingSpot/ParkingSpot.js";
import { Car } from "../Vehicles/Car.js";
import { BikeSpot } from "../ParkingSpot/BikeSpot.js";

export class Ticketing {
  id: number;
  vehicle: VehicleTypes;
  spot: ParkingSpot;
  entryTime: Date;

  constructor(
    id: number,
    vehicle: VehicleTypes,
    spot: ParkingSpot,
    entry: Date
  ) {
    this.id = id;
    this.vehicle = vehicle;
    this.spot = spot;
    this.entryTime = entry;
  }

  calculateFare(exitTime: Date): number {
    /// first find how many duration the vehicle has stayed
    const duration =
      (exitTime.getTime() - this.entryTime.getTime()) / 1000 / 60;

    return duration * 5;
  }
  getSpot(): ParkingSpot {
    return this.spot;
  }
}

// let cars = new Car("Marudhu-123");
// let spots = new ParkingSpot(1, new BikeSpot());
// let entry = new Date();
// //// exit time after 120 minutes that's why used 60 * 1000
// let exit = new Date(entry.getTime() + 120 * 60 * 1000);
// let done = new Ticketing(1234, cars, spots, entry);
// console.log(done.calculateFare(exit));
