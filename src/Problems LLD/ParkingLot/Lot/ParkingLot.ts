import { Level } from "../Level/Level.js";
import { VehicleTypes } from "../Vehicles/Vehicle.js";
import { Ticketing } from "../Ticket/Ticket.js";

export class ParkingLots {
  private static instance: ParkingLots;
  public level: Level[];

  private constructor(levelCount: number, spotsPerLevel: number) {
    this.level = [];
    for (let i = 0; i < levelCount; i++) {
      this.level.push(new Level(i, spotsPerLevel));
    }
  }

  public static getInstance(
    levelCount: number,
    spotsPerLevel: number
  ): ParkingLots {
    if (!ParkingLots.instance) {
      ParkingLots.instance = new ParkingLots(levelCount, spotsPerLevel);
    }
    return ParkingLots.instance;
  }

  parkingVehicle(vehicle: VehicleTypes): boolean {
    for (let lev of this.level) {
      if (lev.parkVehicle(vehicle)) {
        return true;
      }
    }
    return false;
  }

  removeParkingVehicle(ticket: Ticketing): boolean {
    const findSpot = ticket.getSpot();
    findSpot.removeVehicle();
    return true;
  }
}
