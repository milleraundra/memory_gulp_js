var Game = require('./Game.js').Game;
var Player = require('./Player.js').Player;

var new_player = new Player("torrence");
var new_game = new Game(new_player);
var result = new_game.setUp();
console.log(result);
var choice = new_game.turn(result[0], result[1]);
console.log(choice);
console.log(new_player.turn_count);
