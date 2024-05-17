import { Scene } from 'phaser';
import { GAME_WIDTH } from '../consts.js';

export class GameOver extends Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.image(GAME_WIDTH / 2, 384, 'background').setAlpha(0.5);

        this.add
            .text(GAME_WIDTH / 2, 384, 'Game Over', {
                fontFamily: 'Arial Black',
                fontSize: 64,
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'center',
            })
            .setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}
