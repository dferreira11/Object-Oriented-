class HumanPlayer extends Player {
    private inputHandler: IInputHandler;

    constructor(snakeController: SnakeController, inputHandler: IInputHandler) {
        super(snakeController);
        this.inputHandler = inputHandler;
    }

    makeTurn(): void {
        if (this.inputHandler.madeLeftMove()) {
            this.sc.turnSnakeLeft();
            this.inputHandler.resetLeftMove();
        } else if (this.inputHandler.madeRightMove()) {
            this.sc.turnSnakeRight();
            this.inputHandler.resetRightMove();
        }
    }
}
