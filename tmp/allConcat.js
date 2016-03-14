var Game = require('./../js/Game.js').Game;
var Card = require('./../js/Card.js').Card;
var Player = require('./../js/Player.js').Player;

$(document).ready(function(){
  event.preventDefault();
  $("#player_input").submit(function(event){
  var player = $('input#player').val();
  console.log(player);
  var new_player = new Player(player);
  $("#player_input").hide();
  $("#card_display").show();
  });


  // foreach(item in array){
  //   append(divname)
  //   divname++
  // }
});
