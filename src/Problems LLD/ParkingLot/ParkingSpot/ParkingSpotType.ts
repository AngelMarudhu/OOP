import { VehicleTypes } from "../Vehicles/Vehicle.js";

export abstract class ParkingSpotType {
  abstract fitChecking(Vehicle: VehicleTypes): boolean;
}
