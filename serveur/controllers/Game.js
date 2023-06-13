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

module.exports.gamesId_gameDELETE = function gamesId_gameDELETE (req, res, next, id_game) {
  Game.gamesId_gameDELETE(id_game)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gamesId_gameGET = function gamesId_gameGET (req, res, next, id_game) {
  Game.gamesId_gameGET(id_game)
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
