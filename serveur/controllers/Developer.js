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

module.exports.developersNameDELETE = function developersNameDELETE (req, res, next, name) {
  Developer.developersNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.developersNameGET = function developersNameGET (req, res, next, name) {
  Developer.developersNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.developersNameGamesGET = function developersNameGamesGET (req, res, next, name) {
  Developer.developersNameGamesGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.developersPOST = function developersPOST (req, res, next, body) {
  Developer.developersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
