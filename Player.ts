import SnakeController from "./SnakeController";
abstract class Player {
  protected sc: SnakeController;

  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  abstract makeTurn(): void;
}

class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn() {}
}
export default Player;
