export class Note {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  getPaying(): number {
    return this.value;
  }
}
