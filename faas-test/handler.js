const express = require('express');

const router = module.exports = express.Router({ mergeParams: true });

router.get('/users', (req, res, next) => {
  res.send({
    message: 'List of users'
  })
});

router.post('/users', (req, res, next) => {
  res.send({
    message: 'Add new user'
  })
});

router.get('/users/:username', (req, res, next) => {
  res.send({
    message: 'Profile for ' + req.params.username
  })
});
