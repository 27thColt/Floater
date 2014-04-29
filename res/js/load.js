loadState = {
	preload:function() {
		//loads everything
		this.game.stage.backgroundColor = 0x13A2D1;

		textStyle = { font: "15px Lucida Grande", fill: "#ffffff" };

		game.load.image("player", "assets/img/player.png");
		game.load.image("coin", "assets/img/coin.png");
		game.load.image("fish", "assets/img/fish.png");
		game.load.image("ground", "assets/img/ground.png");
		game.load.image("bubble", "assets/img/bubble.png");
	},

	create:function() {
		game.state.start("menu");
	}
};	