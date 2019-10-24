import React, { Fragment } from "react";
import { Start } from "../components/Start/index";
import { SignBtn } from "../components/SignBtn/index";
import {CarouselImg} from '../components/CarouselImg'

export const LandingPage = () => {
  return (
    <Fragment>
      <p className="presentation">
        Find your perfect trip,designed by insiders who know and love their cities
      </p>
      <Start />
      <p>Want to build your own MYtinerary?</p>
      {/* <section className="Sign-container">
        <SignBtn account={true} to='/login'  />
        <SignBtn account={false} to='/sign-up' />
      </section> */}
      <p>Popular MYtineraries</p>
      <CarouselImg/>
    </Fragment>
  );
};
