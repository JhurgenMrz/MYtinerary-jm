import React, { useState } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./Nav.css";
import logo from '../../assets/MYtinerarySVG.svg'
import classNames from 'classnames'
import { logout } from '../../actions/authActions'
import UserInfo from '../UserInfo'

const Menu = ({ show }) => {

  const fadeMenu = useSpring({
    width: show ? 180 : 0,
    config: {
      duration: .2
    }
  })



  return (
    <animated.section className={'Menu'} style={fadeMenu} >

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

export const Nav = (props) => {
  const { isLogin, isRegister } = props
  const isLogged = props.user.isAuthenticated
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);

  // console.log(props)
  const navClass = classNames(
    'nav-container', {
    isRegister,
    isLogin
  }
  )

  return (
    <nav className={navClass}>
      <div onClick={() => setShow(!show)}>
        {isLogged ? (
          <img className="Nav__user UserImg" src={props.user.user.avatarPicture} alt="Me" />
        ) : (
            <FaUserCircle />
          )}
      </div>
      <Link className="logo__link" to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <MdMenu onClick={() => setMenu(!menu)} />
      <Menu className="Menu__icon" show={menu} />
      <UserInfo show={show} sessionActive={isLogged} />
    </nav>
  );
};

const mapDispatchToProps = reducer => {
  return { user: reducer.user }
}

export default connect(mapDispatchToProps, { logout })(Nav)