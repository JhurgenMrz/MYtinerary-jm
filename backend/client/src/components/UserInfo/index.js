import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserInfo.css";
import { logout } from "../../actions/authActions";

const UserInfo = props => {
  const { sessionActive, show } = props;
  console.log(props)
  let active = "";
  if (show) {
    active = "active";
  } else {
    active = "";
  }
  return (
    <section className={`UserInfo ${active}`}>
      {sessionActive ? (
        <>
          <h4>Logout</h4>
        </>
      ) : (
        <>
          <Link to="/register">
            <h4>Create Account</h4>
          </Link>
          <Link to="login">
            <h4>Login</h4>
          </Link>
        </>
      )}
    </section>
  );
};

export default connect(null, { logout })(UserInfo);
