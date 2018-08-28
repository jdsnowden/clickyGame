import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <p>(Turbo Championship Edition)</p>
    <h2>
      Click on fighter to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Header;
