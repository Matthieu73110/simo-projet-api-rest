'use strict';


/**
 * List all supported platforms
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.platformsGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modify a game by platform
 *
 * body Games_id_game_body 
 * id_platform String a platform if found
 * id_game String a game if found
 * no response value expected for this operation
 **/
exports.platformsId_platformGamesId_gamePUT = function(body,id_platform,id_game) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete one supported plateform
 *
 * name String 
 * no response value expected for this operation
 **/
exports.platformsNameDELETE = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one supported platform
 *
 * name String a platform if found
 * no response value expected for this operation
 **/
exports.platformsNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all games by plateform
 *
 * name String a platform if found
 * no response value expected for this operation
 **/
exports.platformsNameGamesGET = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new platform
 *
 * body Platforms_name_body 
 * name String name platform
 * no response value expected for this operation
 **/
exports.platformsNamePOST = function(body,name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

