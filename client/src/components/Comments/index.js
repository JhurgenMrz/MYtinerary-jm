import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import { getComments, postComment } from "../../actions/commentsAction";
import { IoMdArrowDropright } from "react-icons/io";
import "./Comments.css";
import { Loader } from "../Loader";
import axios from "axios";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Comments = props => {
  // console.log(props);
  const { activityId } = props;
  const [listOfComments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(true);
  const [commentIdToBeUpdated, setCommentId] = useState('');
  const [commentValue, setComment] = useState("");

  async function updateComment(commentContent, commentId) {
    const response = await axios.put(`/api/comments/${commentId}`, {commentContent: commentContent});
    getComments(activityId);
    setCommentId('')
    setComment('')
  }

  async function submitComment(bodyComment) {
    const commentResponse = await axios({
      url: `/api/comments/${activityId}`,
      data: {
        commentContent: bodyComment,
        userId: props.user.user._id,
        userName: props.user.user.userName,
        avatarPicture: props.user.user.avatarPicture
      },
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${window.localStorage.getItem("token")}`
      }
    });
    getComments(activityId);
  }

  const deleteComment = (commendId) => {
    axios.delete(`/api/comments/${commendId}`);
    getComments(activityId);
  }

  const handleComment = event => {
    if (event.key === "Enter") {
      if (newComment) {
        submitComment(commentValue);
        setComment("");
      } else {
        updateComment(commentValue, commentIdToBeUpdated);
        setNewComment(true);
      }
    }
  };

  const sendCommentByClick = event => {
    if(newComment){
      submitComment(commentValue);
      setComment("");
    }else{
      updateComment(commentValue, commentIdToBeUpdated);
      setNewComment(true)
    }
  };

  async function getComments(activityId) {
    const { data } = await axios.get(
      `/api/comments/${activityId}`
    );
    setComments(data.data);
  }

  useEffect(() => {
    // props.getComments(ActivityId);
    getComments(activityId);
  }, []);

  return (
    <div className="Comments">
      <h4>Comments</h4>
      <div className="Comments__container">
        {listOfComments.length !== 0 &&
          listOfComments.map(commentItem => (
            <section className="Comments__comment" key={commentItem._id}>
              <div className="Comments__content">
                <img
                  src={commentItem.avatarPicture}
                  alt={commentItem.userName}
                />
                <p>{commentItem.commentContent}</p>
              </div>
              <div className="Comments__commentOptions">
                <Moment date={commentItem.date} fromNow />
                {props.user.user && commentItem.userId === props.user.user._id && (
                  <div className="Comments__Options">
                    <MdEdit
                      onClick={() => {
                        setNewComment(false);
                        setComment(commentItem.commentContent);
                        setCommentId(commentItem._id);
                      }}
                    />
                    <MdDeleteForever onClick={()=>{deleteComment(commentItem._id)}}/>
                  </div>
                )}
              </div>
            </section>
          ))}
      </div>
      <div className="Comments__input">
        {
          props.user.user !== null && 
          <>
            <input
              value={commentValue}
              onChange={e => setComment(e.target.value)}
              type="text"
              placeholder="Your Comment..."
              name="comment"
              onKeyDown={handleComment}
            />
            <IoMdArrowDropright
              style={{ fontSize: "30px" }}
              onClick={sendCommentByClick}
            />
          </>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, { idItinerary }) => {
  const {
    user,
    comments: { comments, error, loading }
  } = state;
  return { user, comments, error, loading, idItinerary };
};

export default connect(mapStateToProps, { getComments, postComment })(Comments);
