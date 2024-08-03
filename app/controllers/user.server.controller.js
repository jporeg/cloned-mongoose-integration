const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async function(req, res) {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
