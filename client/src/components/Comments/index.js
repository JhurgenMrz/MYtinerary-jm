import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import { getComments, postComment } from "../../actions/commentsAction";
import { IoMdArrowDropright } from "react-icons/io";
import "./Comments.css";
import { Loader } from "../Loader";
import axios from "axios";

const Comments = props => {
  // console.log(props);
  const { activityId } = props;
  const [listOfComments, setComments] = useState([]);
  const [comment, setValue] = useState({
    content: ""
  });

  async function submitComment (bodyComment){
    // console.log(props.user)
    const commentResponse = await axios({
      url: `http://localhost:5001/api/comments/${activityId}`,
      data: {
        commentContent: bodyComment,
        userId: props.user.user._id,
        userName: props.user.user.userName,
        avatarPicture: props.user.user.avatarPicture
      },
      method: 'post',
      headers:{
        "Content-Type":"application/json",
        "Authorization": `bearer ${window.localStorage.getItem('token')}`
      }
    })

    getComments(activityId)

    console.log(commentResponse)
  }

  const handleComment = event => {
    if (event.key === "Enter") {
      submitComment(comment.content);
      setValue({ content: "" });
    }
  };

  async function getComments(activityId) {
    const { data } = await axios.get(
      `http://localhost:5001/api/comments/${activityId}`
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
        { listOfComments.length !== 0 && listOfComments.map(comment => (
          <section className="Comments__comment" key={comment._id}>
            <div className="Comments__content">
              <img src={comment.avatarPicture} alt={comment.userName} />
              <p>{comment.commentContent}</p>
            </div>
            <Moment date={comment.date} fromNow />
          </section>
        ))}
      </div>
      <div className="Comments__input">
        <input
          value={comment.content}
          onChange={e => setValue({ content: e.target.value })}
          type="text"
          placeholder="Your Comment..."
          name="comment"
          onKeyDown={handleComment}
        />
        <IoMdArrowDropright
          style={{ fontSize: "30px" }}
          onClick={() => {
            submitComment(comment.content)
            setValue({ content: "" });
          }}
        />
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
