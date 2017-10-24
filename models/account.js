var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Training Module Schema
 */
var AccountSchema = new Schema({
  account_name: {
    type: String,
    required: true
  },
  contact_name: {
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
  primary_phone: {
    type: String
  },
  seconday_phone: {
    type: String
  },
  primary_fax: {
    type: String
  }
});


module.exports = mongoose.model('Accounts', AccountSchema);
