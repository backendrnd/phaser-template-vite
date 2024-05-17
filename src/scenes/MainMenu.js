import { Scene } from 'phaser';
import { GAME_WIDTH } from '../consts.js';
import WebApp from '@twa-dev/sdk';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    onClick = () => {
        WebApp.showAlert(`Hello ${WebApp.initDataUnsafe.user.first_name} ${WebApp.initDataUnsafe.user.last_name}`);
    };

    create() {
        this.add.image(GAME_WIDTH / 2, 384, 'background');

        this.add.image(GAME_WIDTH / 2, 100, 'logo').setScale(0.5);

        this.add
            .text(GAME_WIDTH / 2, 460, 'Main Menu', {
                fontFamily: 'Arial Black',
                fontSize: 38,
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'center',
            })
            .setOrigin(0.5);

        const clickMeButton = this.add
            .text(GAME_WIDTH / 2, 560, 'Click Me', {
                fontFamily: 'Arial Black',
                fontSize: 38,
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'center',
            })
            .setOrigin(0.5)
            .setInteractive();

        clickMeButton.on('pointerdown', this.onClick);
        clickMeButton.on('pointerover', () => {
            console.log('pointerover');
        });

        /*
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
         */
    }
}
