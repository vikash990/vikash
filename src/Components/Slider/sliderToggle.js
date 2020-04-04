import React from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const NavWrapper = styled('div')`
        display: flex;
        width:20px;
        flex-direction:row;
        justify-con
        
       
  `;

const ButtonWrapper = styled('button')`
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:30px;
        width:35px;
        background:transparent;
        border:none;
        cursor:pointer;

        &:focus{
            outline:none;
        }
    `;

const ButtonLine = styled('div')`
       width:30px;
       height:2px;
       background:white;
     
    `;

const Spacer = styled('div')`
    flex:1;

`;
const ComapnyNameWrapper = styled('h4')`
     color:white;
     padding:4px 60px;

`
const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding-bottom:10px;
      padding-right:30px;
      justify-content: center;
      color:white;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }

    
`;
const AnchorTagWrapper=styled('a')`
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

`;

const SliderToggle = props => (
 <NavWrapper>    
    <ButtonWrapper onClick={props.click}>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
    </ButtonWrapper>
    <ComapnyNameWrapper>DevikTech </ComapnyNameWrapper> 
    <AnchorTagWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Apply</AnchorTagWrapper> 
 </NavWrapper>
);

export default SliderToggle;