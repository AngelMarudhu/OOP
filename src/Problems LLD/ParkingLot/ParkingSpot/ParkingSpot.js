export class ParkingSpot {
    vehicle = null;
    spotNumber;
    isFree;
    spotType;
    constructor(spotNum, parkingType) {
        this.isFree = true;
        this.spotNumber = spotNum;
        this.spotType = parkingType;
    }
    assignVehicle(vehicle) {
        if (this.isFree && this.spotType.fitChecking(vehicle)) {
            this.vehicle = vehicle;
            this.isFree = false;
            return true;
        }
        return false;
    }
    removeVehicle() {
        this.vehicle = null;
        this.isFree = true;
    }
    isSpotFree() {
        return this.isFree;
    }
}
