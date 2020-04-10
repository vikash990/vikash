import React from 'react';
import styled from "styled-components";
import {NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap'; 

import logof from '../Images/facebook.png';
import logot from '../Images/twitter.png';
import logol from '../Images/linkedin.png';
import logoi from '../Images/instagram.png';

const FooterWrapper = styled('div')`
     display:flex;
     flex-direction:column;
     justify-content:space-around;



`;

const RowWrapper = styled(Row)`
     display:flex;
     padding:50px 30px 30px 130px;
     background: rgba(0, 0, 0, 0.9);
     @media(max-width:768px) {
        padding:20px 20px 20px 30px;
    }

      `;
const ColWrapper = styled(Col)`
     color:white;
      

`;

const FollowWrapper = styled('div')`
         display:flex;
         flex-direction:row;
         justify-content:space-around;
         height:60px;
         background-color:green;
         padding-top:10px;
         opacity: 0.9;
         color:white;
         
`;
const FollowNameWrapper = styled('div')`
        padding-left:8px;

         

`;
const SocialLinkWrapper= styled('div')`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        width:250px;
   


`;

const AnchorWrapper = styled('a')`
 

`;

const Head4Wrapper = styled('h4')`
      color:green;


`;

const footerItems = [
    
    {
      route: '/about',
      label:'About us'
    },
    {
      route: '/our-team',
      label:'Our Team'
    },
    {
        route: '/succes-stories',
        label:'Sucess Stories'
      },
    {
      route: '/new',
      label:'New'
    },
    
];


class Footer extends React.Component{

    render(){
        return(
            <FooterWrapper>
           <RowWrapper>
               <ColWrapper xs={6} sm={3} >
                     <Head4Wrapper>K-12 </Head4Wrapper>
                      <p>Python(Junior)</p>
                      <p>Web Development(Junior)</p>
              </ColWrapper>
               <ColWrapper xs={6} sm={3}>               
                      <Head4Wrapper>Courses </Head4Wrapper>
                      <p>C</p>
                      <p>C++</p> 
                      <p>Python</p> 
                      <p>Java</p>  
                      <p>MERN Stack</p>  
                      <p>ReactJs</p>  
                      <p>NodeJs</p>
                      <p>Data Structures</p>
                      <p>Algorithm</p>   
               </ColWrapper>
               <ColWrapper xs={6} sm={3}>
                      <Head4Wrapper>Work with Us</Head4Wrapper>
                       <p>Instructor</p>
                       <p>Marketing</p> 
                       <p>Content Development</p>    
                       <p>Intership</p>              
               </ColWrapper>
               <ColWrapper xs={6} sm={3}>                
                      <Head4Wrapper>Contact Us</Head4Wrapper>
                       <p>9117018454</p>
                       <p>9718365756</p>                 
               </ColWrapper>        
            </RowWrapper>
            <FollowWrapper>
                <FollowNameWrapper>
                   <h4>FOLLOW</h4>
                </FollowNameWrapper>
                <SocialLinkWrapper>
                   <AnchorWrapper href="https://www.facebook.com/Deviktech-101424994871042/" target="_blank"><img src={logof}/></AnchorWrapper>
                   {/* <AnchorWrapper href="https://twitter.com/VikashD39681388" target="_blank"><img src={logot}/></AnchorWrapper>
                   <AnchorWrapper href="https://www.linkedin.com/in/vikash-dubey-1b7914171/" target="_blank"><img src={logol}/></AnchorWrapper> */}
                    <AnchorWrapper href="https://instagram.com/deviktechie?igshid=n4o5da45otwy" target="_blank"><img src={logoi}/></AnchorWrapper>
                </SocialLinkWrapper>
            </FollowWrapper>
            </FooterWrapper>
     );
    }
}
export default Footer;