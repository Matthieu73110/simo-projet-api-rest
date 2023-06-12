'use strict';

var utils = require('../utils/writer.js');
var Gender = require('../service/GenderService');

module.exports.gendersGET = function gendersGET (req, res, next, page) {
  Gender.gendersGET(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersNameDELETE = function gendersNameDELETE (req, res, next, name) {
  Gender.gendersNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersNameGET = function gendersNameGET (req, res, next, name) {
  Gender.gendersNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersNameGamesGET = function gendersNameGamesGET (req, res, next, name) {
  Gender.gendersNameGamesGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersPOST = function gendersPOST (req, res, next) {
  Gender.gendersPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
