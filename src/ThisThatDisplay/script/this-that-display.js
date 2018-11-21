/*
Script for displaying the this+that text combination
using Typist along with the rotating box
*/
import React from "react";
import "./../css/this-that-display.css";
import TypistText from "./typist-script.js";

const ThisThatDisplay = props => {
  return (
    <div className="box-this-that">
      <div>
        {/*this text*/}
        <TypistText
          show={false}
          interval={3000}
          startDelay={0}
          text_={props.this_}
        />
      </div>
      <div>For</div>
      <div>
        {/*that text*/}
        <TypistText
          show={true}
          interval={3000}
          startDelay={2000}
          text_={props.that_}
        />
      </div>
    </div>
  );
};

export default ThisThatDisplay;
