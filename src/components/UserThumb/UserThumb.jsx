/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UserThumb = ({ size, className }) => {
  return <div className={`user-thumb size-1-${size} ${className}`} />;
};

UserThumb.propTypes = {
  size: PropTypes.oneOf(["m", "s"]),
};
