import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./Nav.css";
import logo from "../../assets/MYtinerarySVG.svg";
import classNames from "classnames";
import { logout } from "../../actions/authActions";
import "../UserInfo/UserInfo.css";

const Menu = ({ show }) => {
  const fadeMenu = useSpring({
    width: show ? 180 : 0,
    config: {
      duration: 0.2
    }
  });

  return (
    <animated.section className={"Menu"} style={fadeMenu}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </animated.section>
  );
};

export const Nav = props => {
  const { isLogin, isRegister } = props;
  const isLogged = props.user.isAuthenticated;
  const [showUser, setShowUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const classNav = classNames("nav-container", {
    isRegister,
    isLogin
  });

  const UserInfo = ({isLogged, showUser}) => {

    let classUserInfo = classNames(
      'UserInfo',{
        active: showUser
    })

    return (
      <section className={classUserInfo}>
        {isLogged ? (
          <h4
            onClick={() => {
              setShowUser(!showUser);
            }}
          >
            Logout
          </h4>
        ) : (
          <>
            <Link to="/register">
              <h4
                onClick={() => {
                  setShowUser(!showUser);
                }}
              >
                Create Account
              </h4>
            </Link>
            <Link to="login">
              <h4
                onClick={() => {
                  setShowUser(!showUser);
                }}
              >
                Login
              </h4>
            </Link>
          </>
        )}
      </section>
    );
  };

  return (
    <nav className={classNav}>
      {isLogged ? (
        <img
          className="Nav__user UserImg"
          src={props.user.user.avatarPicture}
          alt="Me"
          onClick={() => {
            setShowUser(!showUser);
          }}
        />
      ) : (
        <FaUserCircle
          onClick={() => {
            setShowUser(!showUser);
          }}
        />
      )}
      <UserInfo isLogged={isLogged} showUser={showUser} />
      <Link className="logo__link" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <MdMenu onClick={() => setShowMenu(!showMenu)} />
      <Menu className="Menu__icon" show={showMenu} />
    </nav>
  );
};

const mapDispatchToProps = reducer => {
  return { user: reducer.user };
};

export default connect(mapDispatchToProps, { logout })(Nav);
