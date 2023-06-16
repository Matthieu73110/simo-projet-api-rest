'use strict';

const data = require("../data/editors.json");


/**
 * List all editors
 *
 * page String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.editorsGET = function(page) {
  return new Promise(function(resolve, reject) {
    resolve(data);
  });
}


/**
 * Delete one supported editor
 *
 * id_editor String 
 * no response value expected for this operation
 **/
exports.editorsId_editorDELETE = function(id_editor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one editor
 *
 * id_editor Integer an editor if found
 * no response value expected for this operation
 **/
exports.editorsId_editorGET = function(id_editor) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_editor-1]);
  });
}


/**
 * Get all games by editor
 *
 * id_editor Integer an editor if found
 * no response value expected for this operation
 **/
exports.editorsId_editorGamesGET = function(id_editor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new editor
 *
 * body Editors_body 
 * no response value expected for this operation
 **/
exports.editorsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

