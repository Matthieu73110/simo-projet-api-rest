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
 * Get one editor
 *
 * id_editor String an editor if found
 * no response value expected for this operation
 **/
exports.editorsId_editorGET = function(id_editor) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_editor]);
  });
}


/**
 * Get all games by editor
 *
 * id_editor String an editor if found
 * no response value expected for this operation
 **/
exports.editorsId_editorGamesGET = function(id_editor) {
  return new Promise(function(resolve, reject) {
    resolve(data[id_editor].games);
  });
}

