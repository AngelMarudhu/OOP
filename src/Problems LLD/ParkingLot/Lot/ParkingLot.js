import { Level } from "../Level/Level.js";
export class ParkingLots {
    static instance;
    level;
    constructor(levelCount, spotsPerLevel) {
        this.level = [];
        for (let i = 0; i < levelCount; i++) {
            this.level.push(new Level(i, spotsPerLevel));
        }
    }
    static getInstance(levelCount, spotsPerLevel) {
        if (!ParkingLots.instance) {
            ParkingLots.instance = new ParkingLots(levelCount, spotsPerLevel);
        }
        return ParkingLots.instance;
    }
    parkingVehicle(vehicle) {
        for (let lev of this.level) {
            if (lev.parkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }
    removeParkingVehicle(ticket) {
        const findSpot = ticket.getSpot();
        findSpot.removeVehicle();
        return true;
    }
}
