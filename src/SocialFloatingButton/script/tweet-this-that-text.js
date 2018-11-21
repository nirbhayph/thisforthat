/*Script for setting up the tweet button in the social section*/
import React from "react";
import { TwitterShareButton } from "react-twitter-embed";

class TweetThisThatText extends React.Component {
  render() {
    return (
      <div>
        <TwitterShareButton
          url={"http://itsthisforthat.com"}
          options={{ text: "Wait, what does your startup do?", size: "large" }}
        />
      </div>
    );
  }
}

export default TweetThisThatText;
