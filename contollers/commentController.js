const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const comment = new Comment({
      post,
      user,
      body,
    });

    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: {
          comments: savedComment._id,
        },
      },
      { new: true },
    )
      .populate("comments") // populate the comments array with the comments documents
      .exec();

    res.status(200).json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: error.message,
    });
  }
};
