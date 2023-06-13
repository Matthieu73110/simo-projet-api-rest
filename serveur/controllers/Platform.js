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

module.exports.platformsId_platformGamesId_gamePUT = function platformsId_platformGamesId_gamePUT (req, res, next, body, id_platform, id_game) {
  Platform.platformsId_platformGamesId_gamePUT(body, id_platform, id_game)
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

module.exports.platformsNamePOST = function platformsNamePOST (req, res, next, body, name) {
  Platform.platformsNamePOST(body, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
