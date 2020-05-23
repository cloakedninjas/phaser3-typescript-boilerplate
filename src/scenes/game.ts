import { Scene } from 'phaser';

export class Game extends Scene {
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  create(): void {
    const image = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'phaser_logo');
    image.setOrigin(0.5);
  }
}
