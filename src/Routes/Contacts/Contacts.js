import React, { Component } from "react";
import './Contacts.css'
import dog from '../../Images/dog.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Contacts extends Component{
  render(){
    return (
        <section className="Contacts" ref={this.props.Contacts}>
          <div class ="con">
          <h2>Contacts</h2> 
          <div class ="contactform">
            <h2>Email Adress:</h2>
            <p>raperez523@gmail.com</p>
            <a class="contactbtn" href='mailto:raperez523@gmail.com' ><button  type="button" ><FontAwesomeIcon icon="envelope" /></button></a>
            <h2>Github:</h2>
            <p>ralexblue</p>
            <a class="contactbtn" href='https://github.com/ralexblue' target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon={['fab', 'github-alt']} /></button></a>
            <h2>LinkedIn:</h2>
            <p>Robert Perez</p>
            <a class="contactbtn" href='https://www.linkedin.com/in/robert-perez-198622199/' target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon={['fab', 'linkedin']} /></button></a>
            <h2>Resume:</h2>
            <a class="contactbtn" href='https://drive.google.com/file/d/1l12vuQBOcCRMGIeenfWqbsPn5lUru9sQ/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button  type="button" ><FontAwesomeIcon icon="scroll" /></button></a>
          </div>
      
          <div class="imag-container">
          <img src={dog}  alt="dog"/>
          </div>
          <p>just wanted to put my dog in here</p>
        </div>
        </section>
      )
  }
}