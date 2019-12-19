const express = require("express");

const CommentsService = require("../../services/comments");

function commentsApi(app) {
  const router = express.Router();
  const commentsService = new CommentsService();
  app.use("/api/comments/", router);

  router.get("/:activityId", async function(req, res) {
    const { activityId } = req.params;
    try{
      const comments = await commentsService.getComments(activityId);
      //Funciona!
      res.status(200).json({
        data: comments,
        message: "comments Listed"
      });
    } catch (e) {
      res.status(500).json({
        message: "Server Error"
      })
    }
  });
  router.post("/:activityId", async function(req, res) {
    const { activityId } = req.params;
    const { body: comment } = req;
    const commentCreated = await commentsService.createComment(
      comment,
      activityId
    );
    //Funciona!
    res.status(201).json({
      data: commentCreated,
      message: "comment Created"
    });
  });
  router.put("/:commentId", async function(req, res) {
    const { commentId } = req.params;
    const { body: commentContent } = req
    const commentUpdated = await commentsService.updateComment(commentContent.commentContent, commentId);
    // console.log('Response', commentUpdated)
    //Funciona!
    res.status(200).json({
      data: commentUpdated,
      message: "comment Deleted"
    });
  });


  router.delete("/:commentId", async function(req, res) {
    const { commentId } = req.params;
    const commentDeleted = await commentsService.deleteComment(commentId);
    //Funciona!
    res.status(200).json({
      data: commentDeleted,
      message: "comment Deleted"
    });
  });
}

module.exports = commentsApi;
