Runner.Preload = function () {};

Runner.Preload.prototype = {
    preload: function () {
        /*this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'name');
        this.splash.anchor.setTo(0.5);*/

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, "preloaderBar");
        this.preloaderBar = anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);
    }
};