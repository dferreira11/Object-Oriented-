import SnakeController from "./SnakeController";

//Abstract class that represents a player in the Snake game.The subclasses of Player will define the specific behaviors that a player have

abstract class Player {
  protected scs: SnakeController[];

  //Constructs a new Player instance. @param snakeController - The SnakeController associated with the player.
   
  constructor(snakeControllers: SnakeController[]) {
    this.scs = snakeControllers;
  }

  //Abstract method that defines the behavior of the player for making a turn in the game.The subclasses have to implement this method in order to specify the player's logic for making a turn.
  abstract makeTurn(): void;
}

export default Player;
