import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import { getComments, postComment } from "../../actions/commentsAction";
import { IoMdArrowDropright } from "react-icons/io";
import "./Comments.css";
import { Loader } from "../Loader";

const Comments = props => {
  console.log(props);
  const { idItinerary } = props;
  const [comment, setValue] = useState({
    content: ""
  });

  const handleComment = event => {
    if (event.key === "Enter") {
      setValue({ content: "" });
    }
  };

  useEffect(() => {
    props.getComments(idItinerary);
  }, []);

  return (
    <div className="Comments">
      <h4>Comments</h4>
      <div className="Comments__container">
        {props.loading && <Loader />}
        {props.error ? (
          <h3>{props.error}</h3>
        ) : (
          props.comments.map(comment => (
              <section className="Comments__comment" key={comment._id}>
                <div className="Comments__content">
                  <img src={comment.avatarPicture} alt={comment.userName} />
                  <p>{comment.commentContent}</p>
                </div>
                <Moment date={comment.date} fromNow />
              </section>
          ))
        )}
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
