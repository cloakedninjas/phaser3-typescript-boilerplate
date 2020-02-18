import {Game} from './game';
import {Game as GameScene} from './scenes/game';
import {Preload} from './scenes/preload';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Demo Game',

  scene: [Preload, GameScene],
  backgroundColor: '#333',
  resolution: window.devicePixelRatio,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    parent: 'game-container',
    width: 800,
    height: 600,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
};

window.addEventListener('load', () => {
  window['game'] = new Game(config);
});
