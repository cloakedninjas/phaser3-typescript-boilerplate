import {Game} from './game';
import {Game as GameScene} from './scenes/game';

const config: GameConfig = {
    title: 'Demo Game',
    width: 800,
    height: 600,
    scene: [GameScene],
    backgroundColor: '#333'
};

window.addEventListener('load', () => {
    new Game(config);
});
