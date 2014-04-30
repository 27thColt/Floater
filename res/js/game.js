//create the game
game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

//adds the states
game.state.add("load", loadState);
game.state.add("play", playState);
game.state.add("menu", menuState);
game.state.add("gameOver", gameOverState);
game.state.add("playExtreme", playExtremeState);
game.state.add("help", helpState);

game.state.start("load");