import React, { Component } from "react";
import './Contacts.css'
export default class Contacts extends Component{
  render(){
    return (
        <section className="Contacts" ref={this.props.Contacts}>
          <h2>Contacts</h2> 
          <div class ="contactform">
            <h2>Email Adress:</h2>
            <p>raperez523@gmail.com</p>
            <h2>Github:</h2>
            <p>ralexblue</p>
            <h2>LinkedIn</h2>
            <p>https://www.linkedin.com/in/robert-perez-198622199/</p>
        </div>
        </section>
      )
  }
}