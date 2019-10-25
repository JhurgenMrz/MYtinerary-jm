import React, { Fragment } from "react";
import { Start } from "../components/Start/index";
import { CarouselImg } from "../components/CarouselImg";

export const LandingPage = () => {
  return (
    <Fragment>
      <p className="presentation">
        Find your perfect trip, designed by insiders who know and love their
        cities{" "}
      </p>{" "}
      <Start />
      <p> Want to build your own MYtinerary ? </p> <p> Popular MYtineraries </p>{" "}
      <CarouselImg />
    </Fragment>
  );
};
