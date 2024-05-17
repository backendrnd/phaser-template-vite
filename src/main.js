import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { GAME_HEIGHT, GAME_WIDTH } from './consts.js';
import Phaser from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.NONE,
        parent: document.body,
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
    },
    scene: [Boot, Preloader, MainMenu, Game, GameOver],
};

export default new Phaser.Game(config);
