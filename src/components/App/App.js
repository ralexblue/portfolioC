import React, { Component,Suspense, lazy } from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'


import './App.css';


const Home = lazy(() => import('../../Routes/Home/Home'));
const About = lazy(() => import('../../Routes/About/About'));

class App extends Component  {
  render(){
  return (
    <div className="App">
      <Header/>
        <Suspense fallback={<div>Loading...</div>}>
       <Home/>
       <About/>
      </Suspense>
    </div>
    );
  }
}

export default App;
