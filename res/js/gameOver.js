gameOverState = {
	create:function() {
		this.game.add.text(this.game.width / 2 - 100, this.game.height / 2 - 100, "GAME OVER!", textStyle);
		this.game.add.text(this.game.width / 2 - 100, this.game.height / 2 + 20 - 100, "Coins: " + coins, textStyle);
		this.game.add.text(this.game.width / 2 - 100, this.game.height / 2 + 40 - 100, "Press space to continue", textStyle);
	},

	update:function() {
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			game.state.start("menu");
		};
	}
};