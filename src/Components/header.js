import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import SliderToggle from './Slider/sliderToggle.js';

const NavWrapper = styled('div')`
        display: flex;
        flex-direction: row;
        height:60px;
        padding:12px 15px 12px 15px;
        background: rgba(0, 0, 0, 0.9);
            

    `;

const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
      color:white;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }

      @media(max-width:768px) {
          display:none;
      }
    
`;

const Spacer = styled('div')`
    flex:1

`;
const SliderToggleWrapper=styled('div')`
   @media(min-width:769px){
       display:none;
   }
`;

const ApplyWrapper=styled('a')`
display: flex;
flex-direction: column;
padding: 0 10px;
justify-content: center;
color:white;
text-decoration:none;
background-color:green;
opacity: 0.9;
border: 1px solid white;
  border-radius: 10px;
&:hover {
  
  color:black;
  text-decoration:none;
}



`;
const ComapnyNameWrapper = styled('h4')`
     color:white;
     padding:4px 300px;
     @media(max-width:769px){
        display:none;
    }

`;

class Header extends React.Component{

    render(){
        return(
        <NavWrapper>
            <SliderToggleWrapper>
                <SliderToggle click={this.props.drawerClickHandler}/>
            </SliderToggleWrapper>
           <NavLinkWrapper to ="/" exact >Home</NavLinkWrapper>
           <NavLinkWrapper to ="/about" exact >About</NavLinkWrapper>
           <NavLinkWrapper to ="/courses" exact >Courses</NavLinkWrapper>
           <NavLinkWrapper to ="/contact" exact >Contact</NavLinkWrapper>
           <NavLinkWrapper to ="/currentClass" exact >Current Classes</NavLinkWrapper>
           <ComapnyNameWrapper>DevikTech </ComapnyNameWrapper> 
            <Spacer/>
           
       <ApplyWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Apply</ApplyWrapper> 
        </NavWrapper>
        );

    }
}
export default Header;