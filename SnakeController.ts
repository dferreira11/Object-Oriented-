import WorldModel from "./WorldModel";
import Snake from "./Snake";
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }

  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight() {
    this.slitherer.turnRight();
  }

  get snakePosition(): Point {
    return this.slitherer.position;
  }

  get snakeDirection(): number {
    return this.slitherer.direction;
  }

  get worldWidth(): number {
    return this.snakeWorld.width;
  }

  get worldHeight(): number {
    return this.snakeWorld.height;
  }
}
export default SnakeController;
