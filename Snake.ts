import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: number;

  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }

  turnLeft() {
    this.currentDirection = (this.currentDirection + 3) % 4;
  }

  turnRight() {
    this.currentDirection = (this.currentDirection + 1) % 4;
  }

  move(distance: number) {}

  get direction(): number {
    return this.currentDirection;
  }
}
export default Snake;
