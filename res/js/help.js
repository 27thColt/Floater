helpState = {
	create:function() {
		this.game.add.sprite(350, 0, "logo")

		//text and instructions
		this.game.add.text(210, 70, "You play as a Scuba Diver avoiding fish and collecting coins.", textStyle);

		this.game.add.text(270, 90, "Arrow keys to move up and down.", textStyle);

		game.add.sprite(250, 140, "coin");
		this.game.add.text(300, 140, "- Coin | Collect more of it!", textStyle);

		game.add.sprite(250, 180, "fish");
		this.game.add.text(300, 180, "- Fish | They will damage you by 1 heart!", textStyle);

		game.add.sprite(250, 220, "bubble");
		this.game.add.text(300, 220, "- Powerup Bubble | They will increase you acceleration!", textStyle);

		game.add.sprite(225, 250, "heart");
		this.game.add.text(300, 270, "- Hearts | These are you life!", textStyle);

		game.add.sprite(125, 290, "shark");
		this.game.add.text(300, 330, "- Sharks | They will instantly kill ANYTHING that touches it!", textStyle);
		
		this.playExtremeButton = this.game.add.button(315, 480, "button", this.menuBtn);
		this.game.add.text(330, 500, "Go back to Menu", textStyle);

	},

	//for the menu button
	menuBtn:function() {
		game.state.start("menu");
	}
};