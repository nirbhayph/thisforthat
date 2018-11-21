/*This script is for the sidebar on the left.*/
import React from "react";
import "./../css/slidebar.css";
import SubtextDisplay from "./../../SubtextDisplay/script/subtext-display.js";
import { bubble as SideBar } from "react-burger-menu";

class SlideBar extends React.Component {
  render(props) {
    return (
      <SideBar
        isOpen={this.props.sideBarState}
        noOverlay
        customBurgerIcon={
          <img src={require("./../../Images/arrows.png")} alt="" />
        }
      >
        <div>
          <SubtextDisplay />
        </div>
      </SideBar>
    );
  }
}
export default SlideBar;
