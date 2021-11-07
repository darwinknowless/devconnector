const { check } = require('express-validator');

exports.create = [
	check('status', 'Status is required').not().isEmpty(),
	check('skills', 'Skills is required').not().isEmpty(),
];

exports.createEXP = [
	check('title', 'Title is required').not().isEmpty(),
	check('company', 'Company is required').not().isEmpty(),
	check('from', 'From date is required').not().isEmpty(),
];

exports.createEDU = [
	check('school', 'School is required').not().isEmpty(),
	check('degree', 'Degree is required').not().isEmpty(),
	check('fieldofstudy', 'Field of study is required').not().isEmpty(),
	check('from', 'From date is required').not().isEmpty(),
];
