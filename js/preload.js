
/*
 * Game preload
 */

var Preload = function(game) {
    console.log("Load State Initiated");
};

Preload.prototype = {

    preload: function () {
        // load resources here
        this.load.bitmapFont('font', 'fonts/font.png', 'fonts/font.xml');
        this.load.image('menuBackground', 'images/menu-bg.jpg');

        // preload bar
        this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bootBackground');
        var barImage = this.cache.getImage('preloaderBar');
        this.preloadBar = this.add.sprite((this.game.width - barImage.width) / 2.0, (this.game.height - barImage.height) / 2.0, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
    },

    create: function () {
        //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        this.state.start('MainMenu');
    }
}
