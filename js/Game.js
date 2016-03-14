var Card = require("./Card.js").Card;

exports.Game = function(player) {
  this.player = player;
  this.cards = [];
};

exports.Game.prototype.setUp = function() {
  var card1 = new Card("active", "banana", "./memory/img/banana.png");
  var card2 = new Card("active", "banana", "../img/banana.png");
  var card3 = new Card("active", "grape", "../img/grape.gif");
  var card4 = new Card("active", "grape", "../img/grape.gif");
  var card5 = new Card("active", "orange", "../img/orange.jpg");
  var card6 = new Card("active", "orange", "../img/orange.jpg");
  var card7 = new Card("active", "strawberry", "../img/strawberry.jpg");
  var card8 = new Card("active", "strawberry", "../img/strawberry.jpg");

  this.cards.push(card1, card2, card3, card4, card5, card6, card7, card8);

  this.cards = cardRandomize(this.cards);

  return this.cards;
};

cardRandomize = function(arr) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
// INCOMPLETE functions turn() and gameEnd() are untested
exports.Game.prototype.turn = function(selection1, selection2) {
  if (selection1.name === selection2.name) {
    selection1.status = "inactive";
    selection2.status = "inactive";
    this.player.turn_count += 1;
    //return true;
  } else {
    this.player.turn_count += 1;
    //return false;
  }
  var endGame = gameEnd();
  return endGame;

};

exports.Game.prototype.gameEnd = function() {
  var count = 0;
  var cards = this.cards;
  var endGame = false;
  cards.foreach(function(card) {
    if (card.status === "inactive") {
        count ++;
    }
  });

  if (count === cards.length()) {
    endGame = "victory";
    return endGame;
  } else if (this.player.turn_count === 16) {
    endGame = "failure";
    return endGame;
  } else {
    return endGame;
  }
};
