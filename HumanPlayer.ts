import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

export default class HumanPlayer extends Player {
  private controller: SnakeController;
  private handler: IInputHandler;

  constructor(controller: SnakeController, handler: IInputHandler) {
    super([controller]); 
    this.controller = controller;
    this.handler = handler;
  }

  makeTurn(): void {
    if (this.handler.madeLeftMove() === true) {
      console.log("Handler made left move: " + this.handler.madeLeftMove());
      this.controller.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    else if (this.handler.madeRightMove() === true) {
      console.log("Handler made right move: " + this.handler.madeRightMove());
      this.controller.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }
}
