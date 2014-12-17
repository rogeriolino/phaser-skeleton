
/*
 * Game bootstrap
 */

var Boot = function(game) {
    console.log("Boot State Initiated");
};

Boot.prototype = {

    init: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setMinMax(minWidth, minHeight, maxWidth, maxHeight);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.stage.backgroundColor = '#fff';
    },

    preload: function() {
        this.load.image('preloaderBar', 'images/preload-bar.png');
        this.load.image('bootBackground', 'images/boot-bg.png');
    },

    create: function() {
        this.state.start('Preload');
    }

}
