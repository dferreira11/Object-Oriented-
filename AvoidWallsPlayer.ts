import Player from "./Player";
import SnakeController from "./SnakeController";
class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn() {}
}
export default AvoidWallsPlayer;
