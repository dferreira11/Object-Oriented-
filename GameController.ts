class GameController {
    private world: WorldModel;
    private player1: Player;
    private player2: Player;

    constructor(world: WorldModel) {
        this.world = world;
    }

    setPlayer1(player: Player): void {
        this.player1 = player;
    }

    setPlayer2(player: Player): void {
        this.player2 = player;
    }

    run(): void {
        let lastTime = 0;

        const updateFrame = () => {
            this.player1.makeTurn();
            this.player2.makeTurn();

            const currentTime = Date.now();
            const elapsedTime = currentTime - lastTime;

            if (elapsedTime > 250) {
                this.world.update(1);
                lastTime = currentTime - (elapsedTime % 250);
            }

            requestAnimationFrame(updateFrame);
        };

        updateFrame();
    }
}
