var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var AccountModel = require('../models/account.js');
var User = require('../models/user.js');

// token 
const TOKEN_EXPIRATION = '1h'

/*
 * Register New User
 * Validates new user information and stores in mongodb
 */
router.post('/user', function (req, res) {
  var user = new User();
  user.username = req.body.username.toLowerCase();
  user.password = req.body.password;
  user.passwordConfirmation = req.body.passwordConfirmation;
  user.email = req.body.email;
  user.name = req.body.name;
  if (req.body.username == null || req.body.username == "" ||
    req.body.password == null || req.body.password == "" ||
    req.body.email == null || req.body.email == "" ||
    req.body.name == null || req.body.name == "") {
    res.json({
      success: false,
      message: "Ensure username, email, and password were provided"
    });
  } else if (user.password !== user.passwordConfirmation) {
    res.json({
      success: false,
      message: "Your passwords do not match"
    });
  } else {
    user.save(function (err) {
      if (err) {

        // Check for error messages provided by mongoose validation definitions
        if (err.errors) {
          if (err.errors.name) {
            res.json({
              success: false,
              message: err.errors.name.message
            });
          } else if (err.errors.email) {
            res.json({
              success: false,
              message: err.errors.email.message
            });
          } else if (err.errors.username) {
            res.json({
              success: false,
              message: err.errors.username.message
            });
          } else if (err.errors.password) {
            res.json({
              success: false,
              message: err.errors.password.message
            });
          } else {
            res.json({
              success: false,
              message: err
            });
          }
        } else if (err) {
          if (err.code == 11000) {
            res.json({
              success: false,
              message: "Username or email already exists in database"
            });
          } else {
            res.json({
              success: false,
              message: err
            });
          }
        }
      }
      // else no error, return success
      else {
        res.json({
          success: true,
          message: "Registration successful, redirecting to home page..."
        });
      }
    });
  }
});


/*
 * Update User Profile
 */
router.post('/updateuser', function (req, res) {
  var editUser = req.body._id;
  // Look for user that needs to be editted
  User.findOne({
    _id: editUser
  }, function (err, user) {
    if (err) throw err; // Throw error if cannot connect
    // Check if logged in user is in database
    if (!user) {
      res.json({
        success: false,
        message: 'No user found'
      }); // Return error
    } else {
      // update user profile data
      user.email = req.body.email;
      user.name = req.body.name;
      if (req.body.password) {
        console.log('password provided');
        user.password = req.body.password;
      }
      user.save(function (err) {
        if (err) {
          console.log(err); // Log error to console
        } else {
          res.json({
            success: true,
            message: 'Profile has been updated'
          });
        }
      });
    }
  });
});


/*
 * Update Password
 */
router.post('/updatepassword', function (req, res) {
  var editUser = req.body._id;
  User.findOne({
    _id: editUser
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.json({
        success: false,
        message: 'No user found in database'
      });
    } else {
      user.password = req.body.password;
      user.save(function (err) {
        if (err) {
          throw err;
        } else {
          res.json({
            success: true,
            message: 'Your password has been udpated'
          });
        }
      });
    }
  });
});


/*
 * Login User
 * Validates login info and creates session
 */
router.post('/authenticate', function (req, res) {
  console.log('\nAuthenticate', req.body);
  var username = req.body.username.toLowerCase();
  User.findOne({
    username: username
  }).select('username name email password').exec(function (err, user) {
    if (err) throw err;
    // if no username found
    if (!user) {
      res.json({
        success: false,
        message: 'Invalid username'
      });
      // if username is valid
    } else if (user) {
      // if password is not empty
      if (req.body.password) {
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) { // password does not match
          res.json({
            success: false,
            message: 'Invalid password'
          });
        } else {
          // else username/password valid, gen token
          var token = jwt.sign({
              username: user.username,
              email: user.email
            },
            process.env.SECRET, {
              expiresIn: TOKEN_EXPIRATION
            });
          res.json({
            success: true,
            message: 'User authenticated',
            token: token
          });
        }
        // else no password was provided
      } else {
        res.json({
          success: false,
          message: 'No password provided'
        });
      }
    }
  });
});

/*
 * Check Username
 * Returns true if username is valid (does not already exist)
 */
router.post('/checkusername', function (req, res) {
  var username = req.body.username.toLowerCase();
  User.findOne({
    username: username
  }).select('username').exec(function (err, user) {
    if (err) throw err;
    if (user) {
      res.json({
        success: false,
        message: 'That username is already taken'
      });
    } else {
      res.json({
        success: true,
        message: 'Valid username'
      });
    }
  })
});

/*
 * Check Email
 * Returns true if email is valid (does noe already exist)
 */
router.post('/checkemail', function (req, res) {
  User.findOne({
    email: req.body.email
  }).select('email').exec(function (err, user) {
    if (err) throw err;

    if (user) {
      res.json({
        success: false,
        message: 'That email is already taken'
      });
    } else {
      res.json({
        success: true,
        message: 'Valid e-mail'
      });
    }
  })
});


/*
 * Save new account in database
 */
router.post('/account', function (req, res) {
  console.log('\n\npost/account/ ', req.body);
  var account = new AccountModel();
  account.account_name = req.body.account_name;
  account.contact_name = req.body.contact_name;
  account.primary_phone = req.body.primary_phone;
  account.seconday_phone = req.body.seconday_phone || '';
  account.primary_fax = req.body.primary_fax || '';
  account.state = req.body.state || '';
  account.city = req.body.city || '';

  if (!account.account_name || !account.contact_name || !account.primary_phone) {
    res.json({
      success: false,
      message: 'Account name, contact name, and primary phone number must be included.'
    });
  } else {
    account.save()
      .then(resp => {
        res.json({
          success: true,
          message: 'New account ' + account.account_name + ' saved successfully'
        });
      }).catch(err => {
        res.json({
          success: false,
          message: 'There was an error saving new account ' + account.account_name,
          error: err
        });
      });
  }
});

/**
 * Get all account details
 */
router.get('/account', function (req, res) {
  AccountModel.find({})
    .then(resp => {
      res.json({
        success: true,
        data: resp
      });
    }).catch(err => {
      res.json({
        success: false,
        error: err
      });
    });
});


module.exports = router;
