import { ParkingSpot } from "../ParkingSpot/ParkingSpot.js";
import { VehicleTypes } from "../Vehicles/Vehicle.js";
import { BikeSpot } from "../ParkingSpot/BikeSpot.js";
import { CarSpot } from "../ParkingSpot/CarSpot.js";

export class Level {
  private spots: ParkingSpot[] = [];

  constructor(public totalNumber: number, spotCount: number) {
    for (let i = 0; i < spotCount; i++) {
      if (i < spotCount / 2) {
        this.spots.push(new ParkingSpot(i, new BikeSpot()));
      } else if (i < (2 * spotCount) / 2) {
        this.spots.push(new ParkingSpot(i, new CarSpot()));
      }
    }
  }

  parkVehicle(vehicle: VehicleTypes): boolean {
    for (let spot of this.spots) {
      if (spot.isSpotFree() && spot.assignVehicle(vehicle)) {
        return true;
      }
    }
    return false;
  }

  freeSpots(): number {
    return this.spots.filter((spot) => spot.isSpotFree()).length;
  }
}
