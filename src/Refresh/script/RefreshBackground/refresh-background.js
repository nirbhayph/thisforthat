/*This script is for exporting the background image each time a new image link is passed*/
import React from "react";
import "./../../css/RefreshBackground/refresh-background.css";

const RefreshBackground = props => {
  return <img src={props.source} className="refreshed-image" alt="" />;
};

export default RefreshBackground;
