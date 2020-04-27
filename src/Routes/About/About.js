import React, { Component } from "react";

import './About.css'

export default class About extends Component{
  render(){
    return (
        <section className="About" ref={this.props.About}>
        <h2>About me</h2> 
        <p>I'm a Software Engineer with an Associates Degree in Computer Science.
        I like being a developer because it reminds me of Legos and rather than small 
        toy brick to make a house its unseen digital blocks that I can build with.
        Projects I would like to help with are more ease of use since technnology is growing
        more and more. I like how easier life has been by ordering online or whole taxi service using my phone</p>
        <h2>Hobbies</h2>
        <p> Some hobbies I have is playing and or hearing music that I like.
        I like reading manga/manhwua and like going through different stories.
        I also like to play smash bros.
        One of my favorite dishes in the world is orange tofu,I don't know why but I get it everytime for some reason.
        </p>
        </section>
      )
  }
}