import { Scene } from 'phaser';
import { GAME_WIDTH } from '../consts.js';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(GAME_WIDTH / 2, 384, 'background').setAlpha(0.5);

        this.add
            .text(GAME_WIDTH / 2, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
                fontFamily: 'Arial Black',
                fontSize: 38,
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'center',
            })
            .setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}
