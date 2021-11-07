const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const authController = require('../../controllers/auth');
const authValidator = require('../../middlewares/models/auth');

// @route       GET api/auth
// @desc        Test route
// @access      public
router.get('/', auth, authController.getuser);

// @route       GET api/auth
// @desc        Authenticate user & get token
// @access      public
router.post('/', authValidator.validate, authController.loguser);

module.exports = router;
