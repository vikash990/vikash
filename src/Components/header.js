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
        background: mediumseagreen;
            

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


class Header extends React.Component{

    render(){
        return(
        <NavWrapper>
            <SliderToggleWrapper>
                <SliderToggle click={this.props.drawerClickHandler}/>
            </SliderToggleWrapper>
           <NavLinkWrapper to ="/" exact >Home</NavLinkWrapper>
           <NavLinkWrapper to ="/about" exact >About</NavLinkWrapper>
           <NavLinkWrapper to ="/contact" exact >Contact</NavLinkWrapper>
           <NavLinkWrapper to ="/new" exact >New</NavLinkWrapper>
            <Spacer/>
           <NavLinkWrapper to ="/apply" exact >Apply</NavLinkWrapper>
       </NavWrapper>
        );

    }


}
export default Header;