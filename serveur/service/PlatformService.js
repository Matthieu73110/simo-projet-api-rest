'use strict';

const data = require("../data/platforms.json");

/**
 * List all supported platforms
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.platformsGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve(data);
  });
}


/**
 * Get one supported platform
 *
 * id_platform String a platform if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGET = function(id_platform) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_platform-1]);
  });
}


/**
 * Get all games by plateform
 *
 * id_platform String a platform if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGamesGET = function(id_platform) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_platform-1].games);
  });
}


/**
 * Get one game by platform
 *
 * id_platform String a platform if found
 * id_game String a game if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGamesId_gameGET = function(id_platform,id_game) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_platform-1].games[id_game-1]);
  });
}

