var Card = require("./Card.js").Card;

exports.Game = function(player) {
  this.player = player;
  this.cards = [];
};

exports.Game.prototype.setUp = function() {
  var card1 = new Card("active", "banana", "../img/banana.png");
  var card2 = new Card("active", "banana", "../img/banana.png");
  var card3 = new Card("active", "grape", "../img/grape.gif");
  var card4 = new Card("active", "grape", "../img/grape.gif");
  var card5 = new Card("active", "orange", "../img/orange.jpg");
  var card6 = new Card("active", "orange", "../img/orange.jpg");
  var card7 = new Card("active", "strawberry", "../img/strawberry.jpg");
  var card8 = new Card("active", "strawberry", "../img/strawberry.jpg");

  this.cards.push(card1, card2, card3, card4, card5, card6, card7, card8);

  this.cards.sort((Math.round(Math.random())-0.5));

  return this.cards;
}
