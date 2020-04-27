import React, { Component } from "react";

import './Header.css'

export default class Header extends Component{
  render(){
    return (
        <section className="Header">
         <ul class="navbar1">
              <li class="menu"onClick={(e)=>this.props.goToRef(1)}><div class="item">Home</div></li>
              <li class="menu"onClick={(e)=>this.props.goToRef(2)}><div class="item" >About</div></li>
              <li class="menu"onClick={(e)=>this.props.goToRef(3)}><div class="item">Projects</div></li>
              <li class="menu"onClick={(e)=>this.props.goToRef(4)}><div class="item">Resume/Contact</div></li>
          </ul>
        </section>
      )
  }
}