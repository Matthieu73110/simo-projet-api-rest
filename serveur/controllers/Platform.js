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

module.exports.platformsId_platformGET = function platformsId_platformGET (req, res, next, id_platform) {
  Platform.platformsId_platformGET(id_platform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsId_platformGamesGET = function platformsId_platformGamesGET (req, res, next, id_platform) {
  Platform.platformsId_platformGamesGET(id_platform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.platformsId_platformGamesId_gameGET = function platformsId_platformGamesId_gameGET (req, res, next, id_platform, id_game) {
  Platform.platformsId_platformGamesId_gameGET(id_platform, id_game)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
