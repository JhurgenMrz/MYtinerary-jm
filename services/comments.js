const Comment = require("../models/Comment");

class CommentsService {
  async getComments(itineraryId) {
    try {
      const comments = await Comment.find({ itineraryId });
      return comments || [];
    } catch (err) {
      return err;
    }
  }
  async createComment(comment, itineraryId) {
    const newComment = {
      itineraryId,
      ...comment
    };
    console.log(newComment);
    try {
      const commentCreated = await Comment.create(newComment);
      return commentCreated || [];
    } catch (err) {
      return err;
    }
  }
  async updateComment(commentContent, commentId) {
    try {
      const commentUpdated = await Comment.findByIdAndUpdate(
        {
          _id: commentId
        },
        {
            commentContent: commentContent
        },
        {
            new: true
        }
      );
      return commentUpdated || [];
    } catch (err) {
      return err;
    }
  }
  async deleteComment(commentId) {
    try {
      const commentDeleted = await Comment.findByIdAndDelete(commentId);
      return commentDeleted || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = CommentsService;
