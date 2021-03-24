import React from "react";

const Header = ({ onRouteChange }) => {
  return (
    <div>
      <nav className="dt w-100 border-box pa3 ph5-ns">
        <p className="pointer dtc v-mid mid-gray link dim w-25" title="Home">
          <img
            src={`./Images/images/logo192.png`}
            className="dib w2 h2 br-100"
            alt="Site Name"
          ></img>
        </p>
      </nav>
    </div>
  );
};

export default Header;
