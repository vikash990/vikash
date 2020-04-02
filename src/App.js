import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

import Header from './Components/header.js';
import Home from './Components/home.js';
import Apply from './Components/apply.js';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import SideDrawer from './Components/Slider/sideDrawer.js';
import BackDrop from './Components/BackDrop/backDrop.js';

const MainWrapper =styled('div')`

  height:100%;

`
 
const routeItems = [
  {
    path: '/',
    component: Home

},
{
  path: '/about',
  component:About
},
{
  path:'/contact',
  component:Contact
},
{
  path: '/new',
  component:About
},
  {
      path: '/apply',
      component: Apply
  },
];


class App extends React.Component{
  state = {
    sideDrawerOpen:false
  };
  drawerToggleClickedHandler=() => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false});
  }

  render(){
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop=<BackDrop click={this.backdropClickHandler}/>;
    }
    return(
      <Router>
        <MainWrapper>
          <Header drawerClickHandler={this.drawerToggleClickedHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
          {routeItems.map((item,index) => (
             <Route key={index} path={item.path} exact strict component={item.component}/>

            ))
           }
        </MainWrapper>
      </Router>
      );
  }
}

export default App; 