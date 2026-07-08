const express = require("express");
const router = express.Router();

//Import Controller

const { createComment } = require("../contollers/commentController");
const { createPost } = require("../contollers/PostController");
const { getAllPost } = require("../contollers/postController");
const { likePost, unlikePost } = require("../contollers/likeController");
//Mapping Create

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//Export
module.exports = router;
