// extnralal imports
const express = require('express');

// internal imports
const {getUser} = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

const router = express.Router();

// login page 
router.get('/', decorateHtmlResponse("Users"), getUser);

module.exports = router;
