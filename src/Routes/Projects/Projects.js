import React, { Component } from "react";
import quarantrail from '../../Images/ScreenGame.jpg'
import renstument from '../../Images/Capture.png'
import french from '../../Images/french.JPG'
import './Projects.css'
import { Fade } from 'react-slideshow-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeProperties = {
  infinite: true,
  indicators: true,
  autoplay:false,
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
              <img src={quarantrail}  alt="blank"/>
            </div>
            <div class ="projects">
              <div class ="pro">
                <h1>QuaranTrail</h1>
                <p>
                This is a game solely based on using react components and context to follow the player
                story throughout the game.The game also includes minigames and was inspired by Oregon Trail trying to tell the player
                how far can they can go in the game.
                <br/>
                Tech: React,NodeJS,PostgreSQL
                </p>
                  <div class="row">
                    <div class="col">Live Link:<a href='https://quarantrail.now.sh/' target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon="tv" /></button></a></div>
                    <div class="col">Client repo: <a href='https://github.com/thinkful-ei-jaguar/Quarantrail-client'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="microchip" /></button></a></div>
                    <div class="col">Server repo:<a href='https://github.com/thinkful-ei-jaguar/Quarantrail-server'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="server" /></button></a></div>
                  </div>
                </div>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={renstument}  alt="blank" />
            </div>
            <div class ="projects">
            <div class ="pro">
                <h1>Renstrument</h1>
                <p>
                It is a Rent an Instrument application, 
                where you can create a user and post,edit, and delete instruments using that user.
                Inspired by craiglist and just wanted a simple way for people to post instruments that they don't
                use very often.
                <br/>
                Tech: React,NodeJS,PostgreSQL
                </p>
                <div class="row">
                    <div class="col">Live Link:<a href='https://renstument-app.now.sh/'target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon="tv" /></button></a></div>
                    <div class="col">Client repo: <a href='https://github.com/ralexblue/Renstrument-client'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="microchip" /></button></a></div>
                    <div class="col">Server repo:<a href='https://github.com/ralexblue/Rentsrument'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="server" /></button></a></div>
                  </div>
            </div>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={french} alt="blank" />
            </div>
            <div class ="projects">
              <div class ="pro">
                  <h1>FrenchMoi</h1>
                  <p>
                  This a simple application that helps people learn a few french words using the learning method of spaced repetition.
                  The user can imput a guess and submit to a server to see if that guess was right or wrong.If the answer is correct the app will know 
                  and push the question more farther from the list.
                  <br/>
                  Tech: React,NodeJS,PostgreSQL
                  </p>
                  <div class="row">
                      <div class="col">Live Link:<a href='https://frenchmoi.now.sh/'target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon="tv" /></button></a></div>
                      <div class="col">Client repo: <a href='https://github.com/thinkful-ei-jaguar/FrenchMe-Client-Robert-Scott'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="microchip" /></button></a></div>
                      <div class="col">Server repo:<a href='https://github.com/thinkful-ei-jaguar/FrenchMe-Server-Robert-Scott'target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="server" /></button></a></div>
                  </div>
              </div>
            </div>
          </div>
        </Fade>
        </div>
        </section>
      )
  }
}