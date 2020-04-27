import React, { Component } from "react";
import img1 from '../blank2.jpg'
import './Projects.css'
import { Fade } from 'react-slideshow-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
export default class Projects extends Component{
  render(){
    return (
        <section className="Projects"  ref={this.props.Projects}>
          <h2>Projects</h2> 
          <div class="projectsformat">
          <Fade {...fadeProperties}>
            <div className="each-fade">
            <div className="image-container">
              <img src={img1}  alt="blank"/>
            </div>
            <div class ="projects">
                <h1>QuaranTrail</h1>
                <p>
                This is a game solely based on using react components and context to follow the player
                story throughout the game.The game also includes minigames and was inspired by Oregon Trail trying to tell the player
                how far can they can go in the game.
                <br/>
                Tech: React,NodeJS,PostgreSQL
                </p>
                <button
              class="mybutton"
            >
              <FontAwesomeIcon icon="gamepad" />
            </button>
                <button  type="button" class="left">Repo</button>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={img1}  alt="blank" />
            </div>
            <div class ="projects">
                <h1>Renstrument</h1>
                <p>
                It is a Rent an Instrument application, 
                where you can create a user and post,edit, and delete instruments using that user.
                Inspired by craiglist and just wanted a simple way for people to post instruments that they don't
                use very often.
                <br/>
                Tech: React,NodeJS,PostgreSQL
                </p>
                <button  type="button" class="left">Repo</button>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={img1} alt="blank" />
            </div>
            <div class ="projects">
                <h1>Quiz-App</h1>
                <p>
                This is a simple quiz application about Sound Physics.
                The user can choose between answer choices and submit to see next question to be answered.
                Jquery,HTML,and CSS.
                </p>
                <button  type="button" class="left">Repo</button>
            </div>
          </div>
        </Fade>
        </div>
        </section>
      )
  }
}


/* <div class ="projects">
                <h1>Qui-App</h1>
                <p>
                This is a simple quiz application about Sound Physics.
                The user can choose between answer choices and submit to see next question to be answered.
                Jquery,HTML,and CSS.
                </p>
                <button  type="button" class="left">Repo</button>
            </div> */
            // <div class ="projects">
            //     <h1>Renstrument</h1>
            //     <p>
            //     It is a Rent an Instrument application, 
            //     where you can create a user and post,edit, and delete instruments using that user.
            //     Inspired by craiglist and just wanted a simple way for people to post instruments that they don't
            //     use very often.
            //     <br/>
            //     Tech: React,NodeJS,PostgreSQL
            //     </p>
            //     <button  type="button" class="left">Repo</button>
            // </div>
            // <div class ="projects">
            //     <h1>QuaranTrail</h1>
            //     <p>
            //     This is a game solely based on using react components and context to follow the player
            //     story throughout the game.The game also includes minigames and was inspired by Oregon Trail trying to tell the player
            //     how far can they can go in the game.
            //     <br/>
            //     Tech: React,NodeJS,PostgreSQL
            //     </p>
            //     <button  type="button" class="left">Repo</button>
            // </div>