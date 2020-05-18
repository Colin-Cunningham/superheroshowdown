import React from "react";
import "./style.css"

//Component Import
import Directions from "../Directions/index"
import Search from "../Search/index"
import Card from "../Cards/index"
import Choose from "../Choose/index"
import { Route } from "react-router-dom";


function Header() {
  return (
    //Wrapper for main content of page
    <div class="container"> 
      <Route exact path={"/"}>
        <Directions />
        <Search />
      </Route>
      <Route exact path={"/choose/:com1/:com2"}>
        <Choose />
      </Route>
      <Route exact path={"/fight/:id1/:id2"}>
        <Card />
      </Route>
    </div>

  );
}

export default Header;
