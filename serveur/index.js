'use strict';

//effectué un npm install cors dans le dossier serveur

const cors = require('cors');
const express = require('express');
const path = require('path');
const http = require('http');
const oas3Tools = require('oas3-tools');

const app = express();

// Autoriser toutes les requêtes CORS
app.use(cors());

// swaggerRouter configuration
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers')
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const expressApp = expressAppConfig.getApp();
app.use(expressApp);

// Initialize the Swagger middleware
http.createServer(app).listen(8080, function () {
  console.log('Votre serveur écoute sur le port %d (http://localhost:%d)', 8080, 8080);
  console.log('Swagger-ui est disponible sur http://localhost:%d/docs', 8080);
});