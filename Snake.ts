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
  move(distance: number) {
    if (this.currentDirection === 0) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - distance,
      );
    } else if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x + distance,
        this.currentPosition.y,
      );
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + distance,
      );
    } else if (this.currentDirection === 3) {
      this.currentPosition = new Point(
        this.currentPosition.x - distance,
        this.currentPosition.y,
      );
    }
  }
  turn() {
    this.currentDirection *= -1;
  }
  get currentposition(): Point {
    return this.currentPosition;
  }
  get currentdirection(): number {
    return this.currentDirection;
  }
}
export default Snake;
