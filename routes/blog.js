const express = require("express");
const router = express.Router();

//Import Controller

const { dummyLink } = require("../contollers/likeController");
const { createComment } = require("../contollers/commentController");
const { createPost } = require("../contollers/PostController");
const { getAllPost } = require("../contollers/postController");
//Mapping Create

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);

//Export
module.exports = router;
