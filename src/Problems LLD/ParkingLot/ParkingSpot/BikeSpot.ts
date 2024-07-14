import { ParkingSpotType } from "./ParkingSpotType.js";
import { VehicleTypes } from "../Vehicles/Vehicle.js";

export class BikeSpot extends ParkingSpotType {
  fitChecking(vehicle: VehicleTypes): boolean {
    ////// for bike space we've returned in bike class 5 which means it's triggered which vehicle class return less then 5 space
    return vehicle.getTypeOfSizeVehicle() <= 5;
  }
}
