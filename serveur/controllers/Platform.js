'use strict';

var utils = require('../utils/writer.js');
var Platform = require('../service/PlatformService');

module.exports.platformsGET = function platformsGET (req, res, next, page) {
  Platform.platformsGET(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsNameDELETE = function platformsNameDELETE (req, res, next, name) {
  Platform.platformsNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsNameGET = function platformsNameGET (req, res, next, name) {
  Platform.platformsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsNameGamesGET = function platformsNameGamesGET (req, res, next, name) {
  Platform.platformsNameGamesGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsNameGamesGame_namePUT = function platformsNameGamesGame_namePUT (req, res, next, name, game_name) {
  Platform.platformsNameGamesGame_namePUT(name, game_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsPOST = function platformsPOST (req, res, next) {
  Platform.platformsPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
