'use strict';

var utils = require('../utils/writer.js');
var Editor = require('../service/EditorService');

module.exports.editorsGET = function editorsGET (req, res, next, page) {
  Editor.editorsGET(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsId_editorDELETE = function editorsId_editorDELETE (req, res, next, id_editor) {
  Editor.editorsId_editorDELETE(id_editor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsId_editorGET = function editorsId_editorGET (req, res, next, id_editor) {
  Editor.editorsId_editorGET(id_editor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsId_editorGamesGET = function editorsId_editorGamesGET (req, res, next, id_editor) {
  Editor.editorsId_editorGamesGET(id_editor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsPOST = function editorsPOST (req, res, next, body) {
  Editor.editorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
