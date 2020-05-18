import React from "react";
import "./style.css";




function Search() {



  return (
    <form id="search"  className="col s12">
      <div  id="search" className="row">
        <div id="in" className="input-field col s4">
          <input
            placeholder="Batman"
            id="Hero1"
            type="text"
            className="validate"
          />
        </div>
        <h2 id="vs" className="col s3">VS</h2>
        <div id="in" className="input-field col s4">
          <input
            placeholder="Captain America"
            id="Hero2"
            type="text"
            className="validate"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
