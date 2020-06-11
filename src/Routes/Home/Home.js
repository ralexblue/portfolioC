import React, { Component } from "react";
import './Home.css'
import BIRDS from 'vanta/dist/vanta.birds.min'

export default class Home extends Component{
  constructor() {
    super()
    this.vantaRef = React.createRef();
  }
  componentDidMount() {

    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      color1: 0x1f2833,
      color2: 0xc8c8c8,
      backgroundColor: 0x0b0c10,

    })
  }
  // color: 0xf4769,
	// 		forceAnimate:true
  componentWillUnmount() {
    if (this.vantaEffect) {this.vantaEffect.destroy()}
  }
  /*componentDidUpdate(prevState){
  }*/
  render(){
    return (
        <section className="Home" ref={this.props.home} >
          <div className="Home1" ref ={this.vantaRef}>
          <h1 class="title">Robert Pere<a class="secret" href="https://www.youtube.com/watch?v=kGOQfLFzJj8"
          target="_blank" rel="noopener noreferrer">z</a></h1>
          </div>
        </section>
      )
  }
}
//<div className="Home1" ref ={this.vantaRef}>