var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');


/*
 * mongoose-validator middleware
 * https://github.com/leepowellcouk/mongoose-validator
 */
var nameValidator = [
  validate({
    validator: 'matches',
    arguments: /^(([a-zA-Z]{3,30})+[ ]{1}([a-zA-Z]{3,30}))$/,
    message: 'Name must be between 3 and 30 characters and cannot contain any special characters or numbers. ' +
      'Be sure to include your first and last name.'
  }),
   validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];


var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Please provide valid e-mail address'
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];


var usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    message: 'Username can only contain letters and numbers'
  })
];

var passwordValidator = [
  validate({
    validator: 'matches',
    arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W]).{8,35}$/,
    message: 'Password must include 1 lowercase, 1 uppercase, 1 number, and 1 symbol.'
  }),
   validate({
    validator: 'isLength',
    arguments: [8, 35],
    message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];



/*
 * User Schema
 */
var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: nameValidator
  },
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    validate: usernameValidator
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidator,
    select: false
  },
  permission: {
    type: String,
    required: true,
    default: 'user'
  },
  token: {
    type: String,
    required: false
  }
});


/*
 * mongoose pre save middleware called prior to saving
 */
UserSchema.pre("save", function (next) {
  var user = this;
  // if no password change, continue
  if (!user.isModified('password')) return next();
  // bcrypt-nodejs
  // hash(data, salt, progress, cb)
  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// https://www.npmjs.com/package/mongoose-title-case
UserSchema.plugin(titlize, {
  paths: ['name']
});


UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
