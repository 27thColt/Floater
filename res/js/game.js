//create the game
var game = new Phaser.Game(400, 400, Phaser.AUTO, "game");

//adds the states
game.state.add("load", loadState);
game.state.add("play", playState);
game.state.add("menu", menuState);
game.state.add("gameOver", gameOverState);

game.state.start("load");