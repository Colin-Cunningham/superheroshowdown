import React from "react";
import {Link} from "react-router-dom"
import "./style.css"


function Header() {
  return (
    //Static Nav with few links to about page, and stats
   <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">SuperHeroShowdown</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;
