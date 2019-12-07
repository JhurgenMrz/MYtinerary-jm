import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";
import "./NavBtn.css";

export const NavBtn = props => {
  console.log(props);
  const { isCities, isItineraries, back } = props;
  return (
    <section className="NavBtn__container">
      {isCities ? (
        <Link to="/">
          <FaHome />
        </Link>
      ) : (
        isItineraries && (
          <>
            <IoMdArrowDropleft onClick={back} />
            <Link to="/">
              <FaHome />
            </Link>
            <IoMdArrowDropleft style={{ color: "#fff" }} />
          </>
        )
      )}
    </section>
  );
};
