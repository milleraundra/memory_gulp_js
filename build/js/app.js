(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Card = function(status, name, path) {
  this.status = status;
  this.name = name;
  this.path = path;
};

},{}],2:[function(require,module,exports){
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

},{"./Card.js":1}],3:[function(require,module,exports){
exports.Player = function(name) {
  this.name = name;
  this.turn_count = 0;
};

},{}],4:[function(require,module,exports){
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

},{"./../js/Card.js":1,"./../js/Game.js":2,"./../js/Player.js":3}]},{},[4]);
