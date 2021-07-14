const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middlewares/auth");

// Import model
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route       POST api/posts
// @desc        Create a post
// @access      private
router.post(
	"/",
	[auth, [check("text", " Text is required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			// Find user
			const user = await User.findById(req.user.id).select("-password");
			// Build pst object
			const newPost = new Post({
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});
			// Create post
			const post = await newPost.save();
			// Result/return
			res.json(post);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

// @route       GET api/posts
// @desc        Get all post
// @access      private
router.get("/", auth, async (req, res) => {
	try {
		// Find posts
		const posts = await Post.find().sort({ date: -1 });
		// Result/return
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       GET api/posts/:id
// @desc        Get post by ID
// @access      private
router.get("/:id", auth, async (req, res) => {
	try {
		// Find post
		const post = await Post.findById(req.params.id);
		// If not found
		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}
		// Result/return
		res.json(post);
	} catch (err) {
		console.error(err.message);
		// If not object ID
		if (err.kind == "ObjectId") {
			return res.status(400).json({ msg: "Post not found" });
		}
		res.status(500).send("Server Error");
	}
});

// @route       DELETE api/posts/:id
// @desc        Delete a post
// @access      private
router.delete("/:id", auth, async (req, res) => {
	try {
		// Find post
		const post = await Post.findById(req.params.id);
		// If not found
		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}
		// Check user (if user not owned the post)
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "User not authorized" });
		}
		// Delete post
		await post.remove();
		// Result/return
		res.json({ msg: "Post removed" });
	} catch (err) {
		console.error(err.message);
		// If not object ID
		if (err.kind == "ObjectId") {
			return res.status(400).json({ msg: "Post not found" });
		}
		res.status(500).send("Server Error");
	}
});

module.exports = router;
