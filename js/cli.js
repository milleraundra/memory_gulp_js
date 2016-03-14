var Game = require('./Game.js').Game;
var Player = require('./Player.js').Player;

var new_player = new Player("torrence");
var new_game = new Game(new_player);
var result = new_game.setUp();
console.log(result);
