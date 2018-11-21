/*Script for setting up the twitter follow button in the social section*/

import React from "react";
import { TwitterFollowButton } from "react-twitter-embed";

const TwitterFollow = props => {
  return (
    <TwitterFollowButton
      screenName={props.followName}
      options={{
        size: "large",
        showCount: false
      }}
    />
  );
};

export default TwitterFollow;
