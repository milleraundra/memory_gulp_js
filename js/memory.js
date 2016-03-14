var Game = require('./../js/Game.js').Game;
var Card = require('./../js/Card.js').Card;
var Player = require('./../js/Player.js').Player;

$(document).ready(function(){
//player enters name
  $("#player_form").submit(function(event){
  event.preventDefault();
  var player = $('input#player').val();
  var new_player = new Player(player);
  var new_game = new Game(new_player);
  new_game.setUp();
  var cards = new_game.cards;
  $("#player_input").hide();
  $("#card_display").show();
//INCOMPLETE must associate a card div with an image
  cards.forEach(function(card){
    console.log(card);
    $("#1").append("<img src=" + card.path + "/>")
  });

  });


});
