import React, { useState } from 'react';
import { login } from '../actions/authActions';
import Nav from '../components/Nav';
import '../styles/Login.css';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';

const Login = props => {
  const [loginUser, setLogin] = useState({
    user_name: '',
    password: '',
    remember: false
  });

  const handleCheckbox = e => {
    setLogin({
      ...loginUser,
      remember: !Login.remember
    });
  };

  const handleChange = e => {
    setLogin({
      ...loginUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(loginUser);
    props.login(loginUser);
  };

  return (
    <>
      <Nav isLogin />
      <div className='Login'>
        <h2>Login</h2>
        <form className='Login__container' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='User Name'
            name='user_name'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <div>
            <input type='checkbox' name='remember' onChange={handleCheckbox} />
            <p>Remember me</p>
          </div>
          <button onSubmit={handleSubmit}>Ok</button>
        </form>
        <div
          className='Login__button'
          onClick={() =>
            (window.location.href = 'http://localhost:5001/api/auth/google')
          }
        >
          <FaGoogle /> <p>Log in with Google</p>
        </div>
        <div className='Login__button'>
          <FaFacebookSquare /> <p>Log in with Facebook</p>
        </div>
        <div className='Login__newAccount'>
          <p>
            Don't have a MYtinerary account yet? You should create one! It's
            totally free and only takes a minute
          </p>
          <h4 onClick={() => props.history.push('/register')}>
            Create Account
          </h4>
        </div>
      </div>
    </>
  );
};

export default connect(null, { login })(Login);
