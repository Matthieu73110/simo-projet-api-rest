'use strict';


/**
 * List all games
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.gamesGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve(require("../data/games.json"));
  });
}


/**
 * Delete one supported game
 *
 * id_game Integer 
 * no response value expected for this operation
 **/
exports.gamesId_gameDELETE = function(id_game) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one editor
 *
 * id_game Integer a game if found
 * no response value expected for this operation
 **/
exports.gamesId_gameGET = function(id_game) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new game
 *
 * body Games_body 
 * no response value expected for this operation
 **/
exports.gamesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

