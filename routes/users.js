var express = require('express');
var router = express.Router();

const { get_users } = require('../src/controllers/users')

/* GET users listing. */
router.get('/', get_users);

module.exports = router;
