import 'phaser';

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);

        console.log('hello');
        //let x = new Phaser.Scene('');
        //x.add(new Phaser.GameObjects.Sprite(x, 0, 0, ''));
    }
}
