export class Coin {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  getPaying(): number {
    return this.value;
  }
}
