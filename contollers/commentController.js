//model import
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//businees logic
exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body;

    //Create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    //save the comment into the database
    const savedComment = await comment.save();

    //find the post by ID, add the new comment to its comment array
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
