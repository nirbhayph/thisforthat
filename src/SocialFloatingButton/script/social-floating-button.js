/* This script is used for the social segment of the application */
import React, { Component } from "react";
import { Fab, FabButton, FabActions, FabAction } from "react-fab";
import "react-fab/dist/main.css";
import MaterialIcon from "material-icons-react";
import "./../css/social-floating-button.css";
import TweetThisThatText from "./tweet-this-that-text.js";
import TwitterFollow from "./twitter-follow.js";

class SocialFloatingButton extends Component {
  render() {
    return (
      <div className="floating-button">
        {/*Main floating button*/}
        <Fab style={{ right: "20px", bottom: "20px" }}>
          <FabButton>
            <MaterialIcon icon="share" size={21} />
          </FabButton>
          <FabActions>
            {/*Tweet Button*/}
            <FabAction
              className="button button-royal"
              onClick={this.handleCreateGroup}
              tooltip=<TweetThisThatText />
            >
              <MaterialIcon icon="question_answer" size={13} />
            </FabAction>

            {/*Twitter Follow Button*/}
            <FabAction
              className="button button-balanced"
              onClick={this.handleCreateMemo}
              tooltip=<TwitterFollow followName="erickerr" />
            >
              <MaterialIcon icon="person_add" size={13} />
            </FabAction>

            {/*Twitter Follow Button*/}
            <FabAction
              className="button button-balanced"
              onClick={this.handleCreateMemo}
              tooltip=<TwitterFollow followName="gilbert" />
            >
              <MaterialIcon icon="person_add" size={13} />
            </FabAction>

            {/*Twitter Follow Button*/}
            <FabAction
              className="button button-balanced"
              onClick={this.handleCreateMemo}
              tooltip=<TwitterFollow followName="nirbhayph" />
            >
              <MaterialIcon icon="person_add" size={13} />
            </FabAction>
          </FabActions>
        </Fab>
      </div>
    );
  }
}

export default SocialFloatingButton;
