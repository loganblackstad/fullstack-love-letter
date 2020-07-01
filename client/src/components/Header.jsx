import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderText">
        <p className="pHeader">
          Made by: <a href="https://github.com/loganblackstad/">Logan Blackstad</a>
        </p>
        <a className="aTitle" href="/">
          <h1>
            <span role="img" aria-label="heart emoji">
              ❤️&nbsp;&nbsp;
            </span>
            Love Letter
            <span role="img" aria-label="heart emoji">
              &nbsp;&nbsp;❤️
            </span>
          </h1>
        </a>
        <p className="pHeader">
          Source at:{" "}
          <a href="https://github.com/loganblackstad/fullstack-love-letter">github</a>
        </p>
      </div>
    </div>
  );
};

export default Header;