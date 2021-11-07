const { check } = require('express-validator');

exports.create = [check('text', ' Text is required').not().isEmpty()];
