import { Scene } from 'phaser';

export class Game extends Scene {
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  init() {
    console.log('init here');
  }

  preload() {
    console.log('preload...');
  }
}
