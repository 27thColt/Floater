playExtremeState = {

	//creates everything
	create:function() {
		//player
		this.player = game.add.sprite(this.game.width / 2, this.game.height / 2, "player");

		//player animation
		this.player.animations.add("swim", [0, 1, 2, 3], 7, true);
		this.player.animations.play("swim");

		//ground
		this.ground = this.game.add.tileSprite(0, this.game.height - 120, 800, 120, "ground");
		groundScroll = -400

		//groups (coins, fish, bubbles, hearts, sharks)
		this.coins = this.game.add.group();
		this.fishGroup = this.game.add.group();
		this.bubbles = this.game.add.group();
		this.sharks = this.game.add.group();

		//coins, acceleration, heart text
		this.coinsText = this.game.add.text(0, 10, "", textStyle); 
		this.accelerationText = this.game.add.text(0, 30, "", textStyle);

		//quit text
		this.spacebarText = this.game.add.text(this.game.width - 210, this.game.height - 25, "Press Spacebar to quit", textStyle); 

		//timer
		this.timer = this.game.time.events.loop(1000, this.addMore, this); 

		//physics

		//player physics
		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.allowGravity = false;
		this.player.body.collideWorldBounds = true;
		this.player.body.immovable = true;

		this.playerAcceleration = 500;
		this.playerSpeed = 1000;
		

		this.playerDrag = 500;
		this.player.body.drag.setTo(0, this.playerDrag);

		//the amount of coins and hearts the player has
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


		//autoScroll speed update
		this.ground.autoScroll(groundScroll, 0);

		this.player.body.maxVelocity.setTo(this.playerSpeed, this.playerSpeed);

		//updates the coins, acceleration, hearts
		this.coinsText.setText("Coins: " + coins);
		this.accelerationText.setText("Acceleration: " + this.playerAcceleration);
		
		//checks if the player collects/ hits something
		game.physics.arcade.overlap(this.player, this.coins, this.collectCoin, null, this);
		game.physics.arcade.overlap(this.player, this.fishGroup, this.die, null, this);
		game.physics.arcade.overlap(this.player, this.bubbles, this.collectBubble, null, this);
		game.physics.arcade.overlap(this.player, this.sharks, this.die, null, this);

		game.physics.arcade.overlap(this.sharks, this.coins, this.itemKill, null, this);
		game.physics.arcade.overlap(this.sharks, this.fishGroup, this.itemKill, null, this);
		game.physics.arcade.overlap(this.sharks, this.bubbles, this.itemKill, null, this);


		
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

		//will spawn 1 / 4 of the time
		if (Math.random() > 3 / 4) {
			var coin = this.coins.create(10, Math.floor(Math.random() * 400), "coin");
			this.game.physics.enable(coin, Phaser.Physics.ARCADE);

			//coin animations
			coin.animations.add("bounce", [0, 1, 2, 1, 0, 3, 4, 3], 4, true);
			coin.animations.play("bounce");

    		coin.body.velocity.x = 200; 
    		coin.outOfBoundsKill = true;
		};
		

    	//fish
    	var fish = this.fishGroup.create(10, Math.floor(Math.random() * 400), "fish");

    	//fish animations
    	fish.animations.add("swim", [0, 1, 2, 3, 4, 3, 2, 1], 6, true);
    	fish.animations.play("swim");

		this.game.physics.enable(fish, Phaser.Physics.ARCADE);

		fish.body.velocity.x = 100; 
    	fish.outOfBoundsKill = true;

    	//bubbles

    	//will spawn 1 / 8 of the time
    	if (Math.random() > 7/8) {
    		var bubble = this.bubbles.create(this.game.width - 10, Math.floor(Math.random() * 400), "bubble");
    		this.game.physics.enable(bubble, Phaser.Physics.ARCADE);

    		bubble.body.velocity.x = -400; 
    		bubble.outOfBoundsKill = true;
    	};

    	//sharks

    	//will spawn 1/16 of the time
    	if (Math.random() > 7/8) {
    		var shark = this.sharks.create(10, Math.floor(Math.random() * 400), "shark");
    		this.game.physics.enable(shark, Phaser.Physics.ARCADE);

    		//shark animations
    		shark.animations.add("bite", [0, 1], 4, true);
    		shark.animations.play("bite");

    		shark.body.velocity.x = 400;
    		shark.outOfBoundsKill = true;
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
		coins += 5;
	},

	//for collecting bubbles
	collectBubble:function(player, bubble) {
		bubble.kill();
		this.playerAcceleration += 50;
		this.playerSpeed += 50;
		groundScroll -= 50;
	},

	//when the player dies
	die:function() {
		game.state.start("gameOver");
	},

	itemKill:function(shark, item) {
		item.kill();
	}
};