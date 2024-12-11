export abstract class VehicleTypes {
  protected licencePlate: string;
  public constructor(licencePlate: string) {
    this.licencePlate = licencePlate;
  }
  abstract getTypeOfSizeVehicle(): number;
}
