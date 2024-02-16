import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;

    document.body.appendChild(this.worldCanvas);
  }
  display(worldModel: WorldModel) {
    this.worldCanvas.width = WorldModel.width * this.scalingFactor;
    this.worldCanvas.height = WorldModel.height * this.scalingFactor;
    const snake = WorldModel.getSnake();
    this.context.fillStyle = "green";
    this.context.fillRect(
      snake.getX() * this.scalingFactor,
      snake.getY() * this.scalingFactor,
      this.scalingFactor,
      this.scalingFactor,
    );
  }
}

export default CanvasWorldView;
