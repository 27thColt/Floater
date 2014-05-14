menuState = {
	//draw the text
	create:function() {
		game.add.sprite(250, 0, "logoBig");
		//buttons
		var buttonText =  {
			font: "40px Lucida Grande",
			fill: "#ffffff"
		};

		this.playButton = this.game.add.button(315, 300, "button", this.playBtn);
		this.game.add.text(330, 320, "Play", buttonText);

		this.playExtremeButton = this.game.add.button(315, 390, "button", this.playExtremeBtn);
		this.game.add.text(330, 410, "Play Extreme Mode", textStyle);

		this.playExtremeButton = this.game.add.button(315, 480, "button", this.helpBtn);
		this.game.add.text(330, 500, "Help and Instructions", textStyle);

		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.SPACEBAR]);
	},

	//Play button is pressed
	playBtn:function() {
		game.state.start("play");
	},

	//play extreme button
	playExtremeBtn:function() {
		game.state.start("playExtreme");
	},

	//help button
	helpBtn:function() {
		game.state.start("help")
	}
};