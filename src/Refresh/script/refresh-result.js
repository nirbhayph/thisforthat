/*Used to export the new content retrieved after each refresh*/
import React from "react";
import RefreshBackground from "./RefreshBackground/refresh-background.js";
import ThisThatDisplay from "./../../ThisThatDisplay/script/this-that-display.js";

const RefreshResult = props => {
  return (
    <div>
      <RefreshBackground source={props.link_} />
      <div>
        <ThisThatDisplay this_={props.this_} that_={props.that_} />
      </div>
    </div>
  );
};

export default RefreshResult;
