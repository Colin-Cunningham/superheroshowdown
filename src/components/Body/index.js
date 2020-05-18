import React from "react";
import "./style.css"

//Component Import
import Directions from "../Directions/index"
import Search from "../Search/index"
import Card from "../Cards/index"


function Header() {
  return (
    //Wrapper for main content of page
    <div class="container">
      <Directions />
      <Search />
      <Card />
    </div>

  );
}

export default Header;
