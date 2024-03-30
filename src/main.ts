import 'phaser';
import DemoScene from './Demonstration';

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    scene: DemoScene,
};

const game = new Phaser.Game(config);