var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Training Module Schema
 */
var AccountSchema = new Schema({
  account: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  telephone: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('Accounts', AccountSchema);
