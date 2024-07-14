import { ParkingSpotType } from "./ParkingSpotType.js";
import { VehicleTypes } from "../Vehicles/Vehicle.js";

export class ParkingSpot {
  private vehicle: VehicleTypes | null = null;
  public spotNumber: number;
  private isFree: boolean;
  public spotType: ParkingSpotType;

  constructor(spotNum: number, parkingType: ParkingSpotType) {
    this.isFree = true;
    this.spotNumber = spotNum;
    this.spotType = parkingType;
  }

  assignVehicle(vehicle: VehicleTypes): boolean {
    if (this.isFree && this.spotType.fitChecking(vehicle)) {
      this.vehicle = vehicle;
      this.isFree = false;
      return true;
    }
    return false;
  }

  removeVehicle(): void {
    this.vehicle = null;
    this.isFree = true;
  }

  isSpotFree(): boolean {
    return this.isFree;
  }
}
