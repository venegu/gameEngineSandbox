var Runner = function () {};

Runner.Boot = function() {};

Runner.Boot.prototype = {
    preload: function() {
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },
    create: function() {
        this.game.stage.backgroundColor = '#fff';

        /* Sets up the input - if no multitouch assign to 1*/
        this.input.maxPointers = 1;

        if (this.game.device.desktop) {
            /* Desktop settings */
            this.scale.pageAlignHorizontally = true;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 568;
            this.scale.minHeight = 600;
            this.scale.maxWidth = 2048;
            this.scale.maxHeight = 1536;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
            this.scale.setScreenSize(true);
        }
        this.state.start('Preloader');
    }
};