import React, { Fragment } from "react";
import Nav from '../components/Nav'
import { Start } from "../components/Start/index";
import { CarouselImg } from "../components/CarouselImg";
import {Activities} from '../components/Activities'
import '../styles/LandingPage.css'

export const LandingPage = () => {
  return (
    <Fragment>
        <Nav/>
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
