/*Script for using the typist library*/
import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";

const TypistText = props_ => {
  return (
    <TypistLoop interval={props_.interval}>
      {[props_.text_].map(text => (
        <Typist
          {...props_}
          cursor={{ show: props_.show }}
          key={text}
          startDelay={props_.startDelay}
        >
          {text}
        </Typist>
      ))}
    </TypistLoop>
  );
};

export default TypistText;
