import React from "react";
import "./style.css"

//Component Import
import Directions from "../Directions/index"


function Header() {
  return (
    //Wrapper for main content of page
    <div class="container">
      <Directions />
    </div>

  );
}

export default Header;
