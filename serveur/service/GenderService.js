'use strict';

const data = require("../data/genders.json")

/**
 * List all genders
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.gendersGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve(data);
  });
}


/**
 * Get one gender
 *
 * id_gender String a gender if found
 * no response value expected for this operation
 **/
exports.gendersId_genderGET = function(id_gender) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_gender-1]);
  });
}


/**
 * Get all games by gender
 *
 * id_gender String a gender if found
 * no response value expected for this operation
 **/
exports.gendersId_genderGamesGET = function(id_gender) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_gender-1].games);
  });
}

