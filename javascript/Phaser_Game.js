function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');
    game.load.image('platform', 'sprites/platform.png');

}

var platforms;
var cursors;

//Init 1st player controls
var player1;
var ply1Jump;
var ply1Left;
var ply1Right;

//Init 2nd player controls
var player2
var ply2Left;
var ply2Right;
var ply2Jump

//base stat attributes
var plySpdStat = 500;
var plyJmpStat = 500;


function create() {

    //Create player1
    player1 = game.add.sprite(100, 200, 'player');
    game.physics.arcade.enable(player1);
    player1.body.collideWorldBounds = true;
    player1.body.gravity.y = 500;

    //Create player2
    player2 = game.add.sprite(100, 200, 'player');
    game.physics.arcade.enable(player2);
    player2.body.collideWorldBounds = true;
    player2.body.gravity.y = 500;

    //Create platforms
    platforms = game.add.physicsGroup();
    platforms.create(500, 150, 'platform');
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');
    platforms.setAll('body.immovable', true);

    //Player1 Controls
    ply1Left   = game.input.keyboard.addKey(Phaser.Keyboard.A);
    ply1Right  = game.input.keyboard.addKey(Phaser.Keyboard.D);
    ply1Jump   = game.input.keyboard.addKey(Phaser.Keyboard.W);
    //Player 2 controls
    ply2Jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    cursors = game.input.keyboard.createCursorKeys();

}

function update () {

    //Player 1 Controls
    game.physics.arcade.collide(player1, platforms);

    player1.body.velocity.x = 0;

    if (ply1Left.isDown)
    {
        player1.body.velocity.x = -plySpdStat;
    }
    else if (ply1Right.isDown)
    {
        player1.body.velocity.x =  plySpdStat;
    }

    if (ply1Jump.isDown && (player1.body.onFloor() || player1.body.touching.down))
    {   //make character jump
        player.body.velocity.y = -plyJmpStat;
    }

    //Player 2 Controls
    game.physics.arcade.collide(player2, platforms);

    player2.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player2.body.velocity.x = -plySpdStat/1.5;
    }
    else if (cursors.right.isDown)
    {
        player2.body.velocity.x =  plySpdStat/1.5;
    }

    if (ply2Jump.isDown && (player2.body.onFloor() || player2.body.touching.down))
    {   //make character jump
        player2.body.velocity.y = -plyJmpStat*1.5;
    }
}
