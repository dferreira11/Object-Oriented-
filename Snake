import display from "./display";
// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  move(distance: number) {
    if (this.currentPosition === 1) {
      this.currentPosition += distance;
    } else {
      this.currentPosition -= distance;
    }
  }
  turn() {
    this.currentDirection *= -1;
  }
  get position(): number {
    return this.currentPosition;
  }
}
export default Snake;
