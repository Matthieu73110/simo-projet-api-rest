'use strict';

const data = require("../data/developers.json")

/**
 * List all developers
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.developersGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve(data);
  });
}


/**
 * Get one developer
 *
 * id_developer String a developer if found
 * no response value expected for this operation
 **/
exports.developersId_developerGET = function(id_developer) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_developer-1]);
  });
}


/**
 * Get all games by developer
 *
 * id_developer String a developer if found
 * no response value expected for this operation
 **/
exports.developersId_developerGamesGET = function(id_developer) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_developer-1].games);
  });
}

