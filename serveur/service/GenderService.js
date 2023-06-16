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
 * Delete one supported gender
 *
 * id_gender Integer 
 * no response value expected for this operation
 **/
exports.gendersId_genderDELETE = function(id_gender) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one gender
 *
 * id_gender Integer a gender if found
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
 * id_gender Integer a gender if found
 * no response value expected for this operation
 **/
exports.gendersId_genderGamesGET = function(id_gender) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_editor-1].games);
  });
}


/**
 * Create a new gender
 *
 * body Genders_body 
 * no response value expected for this operation
 **/
exports.gendersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

