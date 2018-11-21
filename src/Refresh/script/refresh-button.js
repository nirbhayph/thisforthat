/*This script is for retrieving this+that values
along with a background image using the unsplash.com api*/

import React from "react";
import axios from "axios";
import MaterialIcon from "material-icons-react";
import "./../css/refresh.css";

/*defining the api clone created*/
const API_LINK = "ENTER_YOUR_PHP_API_CALL_LINK_HERE";

/*defining the root api link for unsplash*/
var IMAGE_LINK = "https://source.unsplash.com/random/";

/*defining image categories to be randomly retrieved from unsplash*/
var IMAGE_TYPE = [
  "chicago",
  "boston",
  "california",
  "washington",
  "texas",
  "rochester",
  "seattle",
  "toronto",
  "belgium",
  "delhi",
  "budapest",
  "rome",
  "italy",
  "florida",
  "amsterdam",
  "jaipur",
  "london"
];

/*setting up an initial this+that combination*/
/*unsplash link as per device size*/
let datachanges = [
  {
    _this_: "Pandora",
    _that_: "Textbooks",
    link_:
      IMAGE_LINK + window.innerWidth + "x" + window.innerHeight + "?" + "mumbai"
  }
];

class RefreshButton extends React.Component {
  handleClick = () => {
    {
      /*
      using axios to retrive data from the api clone defined above
      and selecting a random image category from IMAGE_TYPE
      and using it with the unsplash root api link
    */
    }
    axios.get(`${API_LINK}`).then(function(response) {
      datachanges = [
        {
          _this_: response.data.this,
          _that_: response.data.that,
          link_:
            IMAGE_LINK +
            window.innerWidth +
            "x" +
            window.innerHeight +
            "?" +
            IMAGE_TYPE[Math.floor(Math.random() * IMAGE_TYPE.length)]
        }
      ];
    });
    this.props.onClickFunction(datachanges);
  };

  render() {
    return (
      <div>
        <button className="button-refresh" onClick={this.handleClick}>
          {/*Using the material icon for refresh*/}
          <MaterialIcon icon="refresh" size="large" invert />
        </button>
      </div>
    );
  }
}

export default RefreshButton;
