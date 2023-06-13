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

module.exports.editorsNameDELETE = function editorsNameDELETE (req, res, next, name) {
  Editor.editorsNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameGET = function editorsNameGET (req, res, next, name) {
  Editor.editorsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameGamesGET = function editorsNameGamesGET (req, res, next, name) {
  Editor.editorsNameGamesGET(name)
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
