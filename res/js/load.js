loadState = {
	preload:function() {
		//loads everything
		this.game.stage.backgroundColor = 0x13A2D1;

		textStyle = {
			font: "15px Lucida Grande",
			fill: "#ffffff"
		};

		game.load.spritesheet("player", "assets/img/player2x.png", 40, 80, 4);
		game.load.spritesheet("coin", "assets/img/coin2x.png", 40, 40, 5);
		game.load.spritesheet("fish", "assets/img/fish2x.png", 40, 40, 5);
		game.load.spritesheet("shark", "assets/img/shark4x.png", 160, 80, 2)
		game.load.image("ground", "assets/img/ground2x.png");
		game.load.image("bubble", "assets/img/bubble2x.png");
		game.load.image("heart", "assets/img/heart2x.png");
		game.load.image("button", "assets/img/button4x.png");
		game.load.image("logo", "assets/img/logo.png");
		game.load.image("logoBig", "assets/img/logo4x.png");
	},

	create:function() {
		game.state.start("menu");
	}
};	