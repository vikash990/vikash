import React, { Component } from 'react';
import styled from "styled-components";
import logomap from '../Images/googleMap.png';
 
const ContactWrapper = styled('div')`
   
     display:flex;
     flex-direction:row;

     @media(max-width:768px) {
      flex-direction:column;
  }

`;

const ImageWrapper = styled('div')`
    
   display:flex;
   flex-direction:column;
   width:900px;
   margin:60px 40px 40px 60px; 

   @media(max-width:768px) {

    margin:30px 10px;
    width:300px;
}

`;
 
const AddressWrapper = styled('div')`
   display:flex;
   flex-direction:column;
   width:300px; 
   margin:70px 0px;
   padding:80px 60px;
   color:white;
   background-color:rgba(0,0,0,0.8); 
   box-shadow: 10px 10px 10px 10px  green;

   @media(max-width:768px) {

    margin:30px 5px;
    width:300px;
}
    
`;

class Contact extends Component {
  
  render() {
    return (
      <ContactWrapper>
        <ImageWrapper>
           <img src={logomap}/>
        </ImageWrapper>
        <AddressWrapper>
          <h5>Bangalore Head(Office)</h5>
          <p></p>
          <p>New friends Colony 80 Feet Road,
                 4th Block, Koramangala,
                 Bengaluru - 560034</p>
            <p></p>
           <p>Email:-DevikTechie@gmail.com</p>
           <p>Contact Us</p>
           <p>9117018454,19718365756</p>  
        </AddressWrapper>
      </ContactWrapper>
    );
  }
}
 
export default Contact;