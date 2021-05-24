const express = require('express');
const router = express.Router();
const passport = require('passport');

const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
      res.redirect("/user/no-permission");
      console.log(req.user);
  }
};

router.get('/logged', loggedIn, (req, res) => {
  res.render('logged', {
    name: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', loggedIn, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', loggedIn, (req, res) => {
  res.render('settings');
});

module.exports = router;