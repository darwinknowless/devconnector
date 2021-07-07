const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route       GET api/users
// @desc        Register user
// @access      public
router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty) {
			return res.status(400).json({ errors: errors.array() });
		}

		// See if user exists
		// Get user gravatar
		// Encrypt password
		// Return jsonwebtoken

		res.send("User route");
	}
);

module.exports = router;
