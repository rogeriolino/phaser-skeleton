
/*
 * Game main menu
 */

var MainMenu = function (game) {
    console.log("MainMenu Initiated");
};

MainMenu.prototype = {

    create: function () {
        this.add.tileSprite(0, 0, this.game.width, this.game.height, 'menuBackground');
        this.add.bitmapText(80, 50, 'font', 'MAIN MENU', 60);
    },

    update: function () {
    },

};