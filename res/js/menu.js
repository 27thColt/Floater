menuState = {
	//draw the text
	create:function() {
		this.game.add.text(10, 10, "Welcome to Floater!", textStyle);
		this.game.add.text(10, 30, "By 27thColt", textStyle);

		this.game.add.text(10, 50, "You play as a Scuba Diver avoiding fish", textStyle);
		this.game.add.text(10, 70, "and collecting coins.", textStyle);

		this.game.add.text(10, 100, "Arrow keys to move up and down.", textStyle);
		this.game.add.text(10, 120, "Spacebar to start and quit game.", textStyle);

		game.add.sprite(10, 150, "coin");
		this.game.add.text(50, 150, "- Coin | Collect more of it!", textStyle);

		game.add.sprite(10, 170, "fish");
		this.game.add.text(50, 170, "- Fish | They will kill you! (don't ask me how)", textStyle);

		game.add.sprite(10, 210, "bubble");
		this.game.add.text(50, 210, "- Powerup Bubble | They will increase you acceleration!", textStyle);

		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.SPACEBAR]);
	},

	update:function() {
		//when player presses spacebar
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("play");
		};

	}
};