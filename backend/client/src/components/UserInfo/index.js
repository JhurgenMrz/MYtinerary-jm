import React from "react";
import SignBtn from "../SignBtn";
import { connect } from "react-redux";
import "./UserInfo.css";
import { logout } from "../../actions/authActions";

const UserInfo = props => {
  const { sessionActive, show } = props;
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
          <button onClick={()=>props.logout()}>Logout</button>
          <SignBtn account="logout" />
        </>
      ) : (
        <div>
          <SignBtn account="create" />
          <SignBtn account="login" />
        </div>
      )}
    </section>
  );
};

export default connect(null, { logout })(UserInfo);
