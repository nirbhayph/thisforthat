/*Main Script*/

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./App/script/serviceWorker";
import RefreshButton from "./Refresh/script/refresh-button.js";
import RefreshResult from "./Refresh/script/refresh-result.js";
import APIDisplay from "./API/script/api-display.js";
import ParticlesBackground from "./ParticleBackground/script/particle-background.js";
import SocialFloatingButton from "./SocialFloatingButton/script/social-floating-button.js";
import SlideBar from "./SlideBar/script/slidebar.js";

class App extends React.Component {

  /*initial state*/
  /*designing unsplash link as per device size*/
  state = {
    this_: "It's This",
    that_: "That",
    link: "https://source.unsplash.com/random/"+window.innerWidth+'x'+window.innerHeight+"/?newyork",
    sideBarState: true,
  };

  /*state after pressing refresh button*/
  changeData = datachanges => {
    this.setState(() => ({
      this_: datachanges[0]._this_,
      that_: datachanges[0]._that_,
      link: datachanges[0].link_,
      sideBarState: false,
    }));
  };

  render() {
    return (
      <div>
        {/*For subtext on the left slidebar*/}
        <SlideBar sideBarState={this.state.sideBarState} />

        {/*For every new this+that combination and background image*/}
        <RefreshResult
          this_={this.state.this_}
          that_={this.state.that_}
          link_={this.state.link}
        />

        {/*For refresh button on the right*/}
        <RefreshButton onClickFunction={this.changeData} />

        {/*For the social button contating the twitter buttons on the right bottom corner*/}
        <SocialFloatingButton />

        {/*For the particle background effect*/}
        <ParticlesBackground />

        {/*For the link to the api clone*/}
        <APIDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
