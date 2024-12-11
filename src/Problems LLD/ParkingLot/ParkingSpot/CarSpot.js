import { ParkingSpotType } from "./ParkingSpotType.js";
export class CarSpot extends ParkingSpotType {
    fitChecking(vehicle) {
        return vehicle.getTypeOfSizeVehicle() <= 10;
    }
}
