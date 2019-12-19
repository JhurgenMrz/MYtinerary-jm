import React from "react";
import "./Options.css";
import MYtinerary from "../../assets/MYtinerary.svg";
import { FaMusic } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { MdTrain } from "react-icons/md";

export const Options = () => {
  return (
    <div className="options_header">
      <img src={MYtinerary} alt="logo" />
      <div className="option__container">
        <FaMusic className="option" />
        <MdFlight className="option" />
        <MdLocalDining className="option" />
        <MdTrain className="option" />
      </div>
    </div>
  );
};
