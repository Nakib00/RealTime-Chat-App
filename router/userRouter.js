// extnralal imports
const express = require('express');

// internal imports
const {
    getUser
} = require('../controller/usersController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');
const {
    avatarUpload
} = require('../middleware/users/avatarUpload');

const router = express.Router();

// login page 
router.get('/', decorateHtmlResponse("Users"), getUser);
// add user page
router.post('/', avatarUpload, [check("name")], [check("email")]);

module.exports = router;