const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post
router.post('/create', async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newPost = new Post({ title, content, userId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

module.exports = router;
