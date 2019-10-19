import React, { Fragment } from "react";
import { Start } from "../components/Start/index";
import { SignBtn } from "../components/SignBtn/index";

export const LandingPage = () => {
  return (
    <Fragment>
      <p className="presentation">
        Busca tu Viaje Perfecto! Hay muchas variaciones de los pasajes de Lorem
        Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,
        ya sea porque se le agregó humor
      </p>
      <Start />
      <p>Want to build your own MYtinerary?</p>
      <section className="Sign-container">
        <SignBtn account={true} to='/login'  />
        <SignBtn account={false} to='/sign-up' />
      </section>
    </Fragment>
  );
};
