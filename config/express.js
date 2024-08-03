const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = function() {
  const app = express();

  // Middleware
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // Session middleware
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'developmentSessionSecret'
  }));

  // Load the routing files
  require('../app/routes/user.server.routes')(app);

  return app;
};
