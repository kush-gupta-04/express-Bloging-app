const express = require("express");

const router = express.Router();

//Import Controller

const { dummyLink } = require("../contollers/likeController");
//Mapping Create

router.get("/dummyroute", dummyLink);

//Export
module.exports = router;
