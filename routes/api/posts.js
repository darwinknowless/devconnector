const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const postController = require('../../controllers/posts');
const postValidator = require('../../middlewares/models/posts');

// @route       POST api/posts
// @desc        Create a post
// @access      private
router.post('/', [auth, postValidator.create], postController.create);

// @route       GET api/posts
// @desc        Get all post
// @access      private
router.get('/', auth, postController.getAll);

// @route       GET api/posts/:id
// @desc        Get post by ID
// @access      private
router.get('/:id', auth, postController.getbyID);

// @route       DELETE api/posts/:id
// @desc        Delete a post
// @access      private
router.delete('/:id', auth, postController.delete);

module.exports = router;
