/*For displaying the link to the API clone*/
import React from "react";
import "./../css/api-display.css";

const APIDisplay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">
      <a href="http://littup.cc/thisforthat/api/all_api_links.html" target="_blank" rel="noopener noreferrer">
        {/*Symbol*/}

        <symbol id="s-text">
          <text textAnchor="middle" x="100%" y="0%" dy="1em" dx="-1em">
            api!
          </text>
        </symbol>

        {/* Duplicate Symbol*/}

        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
        <use xlinkHref="#s-text" className="text" />
      </a>
    </svg>
  );
};

export default APIDisplay;
