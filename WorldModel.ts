import Snake from "./Snake";
import CanvasWorldView from "./CanvasWorldView";
import IWorldView from "./IWorldView";
class WorldModel {
  private snake: Snake;
  private width_: number;
  private height_: number;
  private worldView: IWorldView | null = null;

  constructor(snake: Snake, width: number, height: number) {
    this.snake = snake;
    this.width_ = width;
    this.height_ = height;
  }

  update(steps: number) {
    this.snake.move(steps);
    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }

  getSnake(): Snake {
    return this.snake;
  }

  get width(): number {
    return this.width_;
  }

  get height(): number {
    return this.height_;
  }
  set view(worldView: IWorldView | null) {
    this.worldView = worldView;
  }
}
export default WorldModel;
