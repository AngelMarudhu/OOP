import { ParkingSpotType } from "./ParkingSpotType.js";
import { VehicleTypes } from "../Vehicles/Vehicle.js";

export class CarSpot extends ParkingSpotType {
  fitChecking(vehicle: VehicleTypes): boolean {
    return vehicle.getTypeOfSizeVehicle() <= 10;
  }
}
