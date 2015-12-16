/* To create a instance of the game */

/***
 * params: width
 *         height
 *         renderer(canvas, webgl, AUTO for failing gracefully back to canvas maybe)
 *         element id (if you have any other content on the page )
 **/

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', Runner.Boot);
game.state.start('Boot');