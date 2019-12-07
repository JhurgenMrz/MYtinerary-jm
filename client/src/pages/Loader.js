import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/Loader.css';
import Nav from '../components/Nav';
import { getUserWithGoogle } from '../actions/authActions';

const Loader = props => {
  const {
    params: { token }
  } = props.match;

  useEffect(() => {
    props.getUserWithGoogle(token);
    setTimeout(() => {
      props.history.push('/');
    }, 300);
  }, []);

  return (
    <>
      <Nav />
      <div className='Loader__container'>
        <svg className='Loader__svg'>
          <circle cx='70' cy='70' r='70'></circle>
        </svg>
      </div>
    </>
  );
};

export default connect(null, { getUserWithGoogle })(Loader);
