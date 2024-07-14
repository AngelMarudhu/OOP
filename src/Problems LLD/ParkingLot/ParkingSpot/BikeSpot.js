import { ParkingSpotType } from "./ParkingSpotType.js";
export class BikeSpot extends ParkingSpotType {
    fitChecking(vehicle) {
        ////// for bike space we've returned in bike class 5 which means it's triggered which vehicle class return less then 5 space
        return vehicle.getTypeOfSizeVehicle() <= 5;
    }
}
