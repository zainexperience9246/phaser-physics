
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		const dino = this.physics.add.sprite(152, 304, "dino");
		dino.scaleX = 0.47539744874385037;
		dino.scaleY = 0.4023224229103636;
		dino.body.collideWorldBounds = true;
		dino.body.setSize(250, 250, false);

		// coin
		const coin = this.physics.add.staticSprite(605, 331, "coin");
		coin.scaleX = 0.3;
		coin.scaleY = 0.3;
		coin.body.collideWorldBounds = true;
		coin.body.immovable = true;
		coin.body.setOffset(140, 140);
		coin.body.setCircle(40);

		// scoreText
		const scoreText = this.add.text(66, 60, "", {});
		scoreText.text = "ZAIN SCORE:";

		// collider
		const collider = this.physics.add.collider(dino, coin, this.collectCoin, null, this);

		this.dino = dino;
		this.coin = coin;
		this.scoreText = scoreText;
		this.collider = collider;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	dino;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	coin;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.Physics.Arcade.Collider} */
	collider;

	/* START-USER-CODE */

	// Write more your code here
	preload()
	{
		this.load.audio('hover',["assets/hover.wav"]);
	}

	create() {
		//Input Keys
		this.cursors = this.input.keyboard.createCursorKeys();
		this.editorCreate();

	}
	//Score variable
	 score=0;

	 //Function for Coin Collect
	collectCoin(dino, coin) {
		this.coin.destroy(true);
		this.sound.play('hover')

//Particle emiter 
	this.emitter = this.add.particles('flares').createEmitter({
           frame: [ 'red', 'blue', 'green', 'yellow' ],
        x: 400,
        y: 300,
        speed: 200,
        lifespan: 3000,
        blendMode: 'ADD'
});
//Add timer for particles
this.time.delayedCall(1000, ()=>{
    this.emitter.stop();
});


//Scoreboard
		this.score += 10;
		this.scoreText.setText('Score : ' + this.score);
	
	}
	update() {
		//intial velocity set
		this.dino.body.setVelocity(0);

        //Keyboard keys assigned
		if (this.cursors.left.isDown) {
			this.dino.body.setVelocityX(-300);
		}
		else if (this.cursors.right.isDown) {
			this.dino.body.setVelocityX(300);
		}

		if (this.cursors.up.isDown) {
			this.dino.body.setVelocityY(-300);
		}
		else if (this.cursors.down.isDown) {
			this.dino.body.setVelocityY(300);
		}


	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
