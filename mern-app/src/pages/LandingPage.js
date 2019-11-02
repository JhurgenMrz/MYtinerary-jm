import React, { Fragment } from "react";
import { Start } from "../components/Start/index";
import { CarouselImg } from "../components/CarouselImg";
import {Activities} from '../components/Activities'

export const LandingPage = () => {
  return (
    <Fragment>
        <Activities />
      <p className="presentation">
        Find your perfect trip, designed by insiders who know and love their
        cities
      </p>
      <Start />
      <p className="presentation"> Want to build your own MYtinerary ? </p>
      <p className="presentation"> Popular MYtineraries </p>
      <CarouselImg />
    </Fragment>
  );
};
