import Phaser from 'phaser';

export class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  init(): void {
    console.log('init here');
  }

  preload(): void {
    console.log('preload...');
  }
}
