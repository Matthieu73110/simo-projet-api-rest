'use strict';

var utils = require('../utils/writer.js');
var Developer = require('../service/DeveloperService');

module.exports.developersGET = function developersGET (req, res, next, page) {
  Developer.developersGET(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.developersId_developerGET = function developersId_developerGET (req, res, next, id_developer) {
  Developer.developersId_developerGET(id_developer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.developersId_developerGamesGET = function developersId_developerGamesGET (req, res, next, id_developer) {
  Developer.developersId_developerGamesGET(id_developer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
