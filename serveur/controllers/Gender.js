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

module.exports.gendersId_genderDELETE = function gendersId_genderDELETE (req, res, next, id_gender) {
  Gender.gendersId_genderDELETE(id_gender)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersId_genderGET = function gendersId_genderGET (req, res, next, id_gender) {
  Gender.gendersId_genderGET(id_gender)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersId_genderGamesGET = function gendersId_genderGamesGET (req, res, next, id_gender) {
  Gender.gendersId_genderGamesGET(id_gender)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gendersPOST = function gendersPOST (req, res, next, body) {
  Gender.gendersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
