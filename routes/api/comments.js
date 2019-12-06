const express = require("express");

const CommentsService = require("../../services/comments");

function commentsApi(app) {
  const router = express.Router();
  const commentsService = new CommentsService();
  app.use("/api/comments/", router);

  router.get("/:itineraryId", async function(req, res) {
    const { itineraryId } = req.params;
    const comments = await commentsService.getComments(itineraryId);
    //Funciona!
    res.status(200).json({
      data: comments,
      message: "comments Listed"
    });
  });
  router.post("/:itineraryId", async function(req, res) {
    const { itineraryId } = req.params;
    const { body: comment } = req;
    const commentCreated = await commentsService.createComment(
      comment,
      itineraryId
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
    const commentUpdated = await commentsService.updateComment(commentContent, commentId);
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
