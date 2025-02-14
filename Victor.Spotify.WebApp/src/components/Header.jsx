import React from "react";
import spotifyLogo from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

//Component do Header
const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={spotifyLogo} alt="Spotify Logo" />
    </Link>

    <Link className="header__link" to="/">
      <h1>Spotify</h1>
    </Link>
  </div>
);

export default Header;
