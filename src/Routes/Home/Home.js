import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Home.css'

export default class Home extends Component{
  render(){
    return (
        <section className="Home" ref={this.props.home} >
          <h1 class="title">Robert Pere<a class="secret" href="https://www.youtube.com/watch?v=kGOQfLFzJj8"
          target="_blank" rel="noopener noreferrer">z</a></h1>
        </section>
      )
  }
}