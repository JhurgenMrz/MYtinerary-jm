import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import { Start } from '../components/Start/index';
import { CarouselImg } from '../components/CarouselImg';
import { Options } from '../components/Options';
import '../styles/LandingPage.css';
import { connect } from 'react-redux';

const LandingPage = () => {
  return (
    <Fragment>
      <Nav />
      <Options />
      <p className='presentation'>
        Find your perfect trip, designed by insiders who know and love their
        cities
      </p>
      <Start />
      <p className='presentation'> Want to build your own MYtinerary ? </p>
      <p className='presentation'> Popular MYtineraries </p>
      <CarouselImg />
    </Fragment>
  );
};

export default connect(null, null)(LandingPage);
