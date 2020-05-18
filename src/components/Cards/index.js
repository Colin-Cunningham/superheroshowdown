import React from "react";
import "./style.css";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft } from "react-animations";

const leftIn = keyframes`${slideInLeft}`;
const rightIn = keyframes`${slideInRight}`;

//Hero One Slide in from the left
const Slide1 = styled.div`
  animation: 3s ${leftIn};
`;

//Hero2 Slide in from the right
const Slide2 = styled.div`
  animation: 3s ${rightIn};
`;

function Card() {
  return (
    <>
      <div className="row">
        <div id="entry1" className="col s6 m5">
          <Slide1>
            <div className="card-panel">
              <span>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively. I am similar to what is called a panel in other
                frameworks.
              </span>
            </div>
          </Slide1>
        </div>

        <div id="entry2" className="col s6 m5">
          <Slide2>
            <div className="card-panel">
              <h4 className="heroName">SuperHeroName</h4>
            </div>
          </Slide2>
        </div>
      </div>
    </>
  );
}

export default Card;
