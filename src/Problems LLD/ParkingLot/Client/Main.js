import { ParkingLots } from "../Lot/ParkingLot.js";
import { Car } from "../Vehicles/Car.js";
import { Ticketing } from "../Ticket/Ticket.js";
import { CarSpot } from "../ParkingSpot/CarSpot.js";
import { ParkingSpot } from "../ParkingSpot/ParkingSpot.js";
class Display {
    parking;
    constructor(parking) {
        this.parking = parking;
    }
    showAvailable() {
        for (let lev of this.parking.level) {
            console.log(`${lev.totalNumber}: and ${lev.freeSpots()} spots available buddy`);
        }
    }
}
let park = ParkingLots.getInstance(3, 8);
let car = new Car("Marudhu-12345");
let spot = new ParkingSpot(1, new CarSpot());
if (park.parkingVehicle(car)) {
    const tickt = new Ticketing(12, car, spot, new Date());
    const display = new Display(park);
    display.showAvailable();
}
