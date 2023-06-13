'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.gamesGET = function gamesGET (req, res, next, page) {
  Game.gamesGET(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gamesNameDELETE = function gamesNameDELETE (req, res, next, name) {
  Game.gamesNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gamesNameGET = function gamesNameGET (req, res, next, name) {
  Game.gamesNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gamesPOST = function gamesPOST (req, res, next, body) {
  Game.gamesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
