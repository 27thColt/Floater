playState = {

	//creates everything
	create:function() {
		//player
		this.player = game.add.sprite(this.game.width / 2, this.game.height / 2, "player");

		//ground
		this.ground = game.add.sprite(0, this.game.height - 60, "ground");

		//groups (coins, fish, bubbles)
		this.coins = this.game.add.group();
		this.fishGroup = this.game.add.group();
		this.bubbles = this.game.add.group();

		//coins and acceleration text
		this.coinsText = this.game.add.text(0, 10, "", textStyle); 
		this.accelerationText = this.game.add.text(0, 30, "", textStyle);

		//quit text
		this.spacebarText = this.game.add.text(this.game.width - 210, this.game.height - 25, "Press Spacebar to quit", textStyle); 

		//timer
		this.timer = this.game.time.events.loop(1000, this.addMore, this); 

		//physics

		//coin physics
		this.game.physics.enable(this.coins, Phaser.Physics.ARCADE);

		//player physics
		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.allowGravity = false;
		this.player.body.collideWorldBounds = true;
		this.player.body.immovable = true;

		this.playerAcceleration = 150;
		this.playerSpeed = 250;
		this.player.body.maxVelocity.setTo(this.playerSpeed, this.playerSpeed);

		this.playerDrag = 500;
		this.player.body.drag.setTo(0, this.playerDrag);

		//the amount of coins the player has
		coins = 0;

		//key capturing
		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.SPACEBAR]);
	},


	//main game loop
	update:function() {
		//updates the coins and acceleration
		this.coinsText.setText("Coins: " + coins);
		this.accelerationText.setText("Acceleration: " + this.playerAcceleration);
		
		//checks if the player collects/ hits something
		game.physics.arcade.overlap(this.player, this.coins, this.collectCoin, null, this);
		game.physics.arcade.overlap(this.player, this.fishGroup, this.die, null, this);
		game.physics.arcade.overlap(this.player, this.bubbles, this.collectBubble, null, this);
		
		this.keyPress();
	},

	//for key presses
	keyPress:function() {
		if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			this.player.body.acceleration.y = -this.playerAcceleration;

		} else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			this.player.body.acceleration.y = this.playerAcceleration;

		} else {
			this.player.body.acceleration.y = 0;
		};

		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.reset();
		};
	},

	//adding more coins and other items to the screen
	addMore:function() {
		//coin
		var coin = this.coins.create(20, Math.floor(Math.random() * 300), "coin");
		this.game.physics.enable(coin, Phaser.Physics.ARCADE);

    	coin.body.velocity.x = 100; 
    	coin.outOfBoundsKill = true;

    	//fish
    	var fish = this.fishGroup.create(20, Math.floor(Math.random() * 400), "fish");
		this.game.physics.enable(fish, Phaser.Physics.ARCADE);

		fish.body.velocity.x = 50; 
    	fish.outOfBoundsKill = true;

    	//will spawn 1 / 4 times
    	if (Math.random() > 0.75) {
    		var bubble = this.bubbles.create(this.game.height - 20, Math.floor(Math.random() * 400), "bubble");
    		this.game.physics.enable(bubble, Phaser.Physics.ARCADE);

    		bubble.body.velocity.x = -200; 
    		bubble.outOfBoundsKill = true;
    	};
    	
    	


	},

	//resetting the game
	reset:function() {
		this.game.time.events.remove(this.timer); 
		game.state.start("menu");
	},

	//for collecting coins
	collectCoin:function(player, coin) {
		coin.kill();
		coins++;
	},

	//when the player dies
	die:function() {
		game.state.start("gameOver");
	},

	//for collecting bubbles
	collectBubble:function(player, bubble) {
		bubble.kill();
		this.playerAcceleration += 10;
	}
};