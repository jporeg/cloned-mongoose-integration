const config = require('./env/' + process.env.NODE_ENV + '.js');
const mongoose = require('mongoose');

module.exports = function() {
  const db = mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  // Load the User model
  require('../app/models/user.server.model');

  return db;
};
