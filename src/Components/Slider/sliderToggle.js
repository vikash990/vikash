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
background-color:green;
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
 </NavWrapper>
);

export default SliderToggle;