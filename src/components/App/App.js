import React, { Component,Suspense, lazy } from 'react';
//import {Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../../Routes/Home/Home'
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faLinkedin,faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faServer,faTv,faMicrochip,faEnvelope,faScroll} from "@fortawesome/free-solid-svg-icons";

//const Home = lazy(() => import('../../Routes/Home/Home'));
const About = lazy(() => import('../../Routes/About/About'));
const Projects = lazy(() => import('../../Routes/Projects/Projects'));
const Contacts = lazy(() => import('../../Routes/Contacts/Contacts'));
library.add(faServer,faTv,faMicrochip,faLinkedin,faGithubAlt,faEnvelope,faScroll);


class App extends Component  {

  constructor(props){
    super(props)
    this.home = React.createRef();
    this.About = React.createRef();
    this.Projects=React.createRef();
    this.Contacts=React.createRef();
  }
  goToRef =(whichone)=>{
    if(whichone===1){
      if(this.home.current){
          window.scrollTo({
            top: this.home.current.offsetTop,
            behavior: 'smooth'     
        })
      }
    }
    else if(whichone===2){
      if(this.About.current && this.About){
          window.scrollTo({
            top: this.About.current.offsetTop,
            behavior: 'smooth'     
        })
      }
    }
    else if(whichone===3){
      if(this.Projects.current){
          window.scrollTo({
            top: this.Projects.current.offsetTop,
            behavior: 'smooth'     
        })
      }
    }
    else if(whichone===4){
      if(this.Contacts.current){
          window.scrollTo({
            top: this.Contacts.current.offsetTop,
            behavior: 'smooth'     
        })
      }
    }
  }




  render(){
  return (
    <div className="App">
      <Header goToRef ={this.goToRef}/>
      <Home home={this.home}/>
      <Suspense fallback={<div>Loading...</div>}>
      <About About={this.About}/>
      <Projects Projects={this.Projects}/>
      <Contacts Contacts={this.Contacts}/>
      </Suspense>
    </div>
    );
  }
}

export default App;
