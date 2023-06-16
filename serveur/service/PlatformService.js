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
 * Delete one supported plateform
 *
 * id_platform Integer 
 * no response value expected for this operation
 **/
exports.platformsId_platformDELETE = function(id_platform) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one supported platform
 *
 * id_platform Integer a platform if found
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
 * id_platform Integer a platform if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGamesGET = function(id_platform) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_platform-1].games);
  });
}


/**
 * Modify a game by platform
 *
 * body Games_id_game_body 
 * id_platform Integer a platform if found
 * id_game Integer a game if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGamesId_gamePUT = function(body,id_platform,id_game) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new platform
 *
 * body Platforms_id_platform_body 
 * id_platform Integer name platform
 * no response value expected for this operation
 **/
exports.platformsId_platformPOST = function(body,id_platform) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

