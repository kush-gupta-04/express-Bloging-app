//model import
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = new Like({
      post,
      user,
    });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true },
    )
      .populate("likes")
      .exec();
    res.json({
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

//Unlike Post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true },
    );
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
