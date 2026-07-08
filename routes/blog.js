const express = require("express");
const router = express.Router();

//Import Controller

const { dummyLink } = require("../contollers/likeController");
const { createComment } = require("../contollers/commentController");
//Mapping Create

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
//Export
module.exports = router;
