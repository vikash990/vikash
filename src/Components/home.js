import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap'; 
import {NavLink} from 'react-router-dom';

const HomeWrapper = styled('div')`
  
    min-height:65vh;

`;
const HeadingWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-left: 400px;
     @media(max-width:768px) {
          margin-left:16px;
          width: 300px;
      }

`;
const ExploreWrapper = styled('h4')`
     margin:20px 0px 20px 80px;
      @media(max-width:768px) {
          margin:20px 0px 20px 25px;
      }

`;
const NavLinkWrapper= styled(NavLink)`
    
    
      color:white;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }
    
`;

const RowWrapper=styled('div')`
   
    margin:20px 0px 30px 8px;
     @media(min-width:768px) {
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin:20px 0px 0px 60px;
      }
`;

const ColWrapper=styled('div')`
    
    background-color:rgba(0,0,0,0.9);
    color:white;
    width:300px;
    border-radius:12px;
    padding:10px 10px 10px 30px;
     box-shadow: 3px 5px 10px 10px green;
           @media(max-width:768px) {
          margin:30px 3px;
      }
`;


const KnowMoreWrapper=styled('div')`

   display:flex;
   width:100px;
   height:35px;
   padding:3px 0px 0px 6px;
   background-color:orange;
   border-radius:9px;

`;
const ExploreNameWrapper = styled('div')`
  display:flex;
  flex-direction:column;
  margin:70px 0px 0px 70px;
  

`;

const AllCourseWrapper = styled('div')`
       display:flex;
       flex-wrap:wrap;
    
`;
const CourseWrapper = styled('div')`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin:40px 40px 60px 70px;
  width:220px;
  height:200px;
  
  color:white;
  background-color:black;
  border-radius:14px;
  box-shadow: 3px 5px 10px 10px green;
           @media(max-width:768px) {
          margin:30px 50px;
      }
  
`;
const HeadingSubWrapper = styled('div')`
   text-align:center;
  
  
`;
const SubjectWrapper = styled('div')`
   
    text-align:center;
`;
const TimeFeesWrapper = styled('div')`
    display:flex;
    flex-direction:row;
    justify-content:space-around;  
    text-align:center;
    
  
`;
const ApplyKnowMoreWrapper = styled('div')`
   
    display:flex;
    flex-direction:row-reverse;
    padding-left:5px;
    margin-right:20px;

`;
const ApplyWrapper=styled('a')`

   display:flex;
   width:55px;
   height:30px;
   padding:3px 0px 0px 6px;
   background-color:orange;
   border-radius:9px;
   color:white;

   &:hover {
  color:black;
  text-decoration:none;
}

`;

const WhyUsWrapper = styled('div')`
   
   display:flex;
   flex-direction:column;
   margin:10px 0px 0px 50px;

`;

const DifferentHeadWrapper=styled('div')`
   margin-bottom:20px;

`;

const DifferentParaWrapper=styled('div')`


`;

const subjectInfo= [
     {
         heading:"Python Junior",
         subject:"Python",
         duration:"2 months",
         fees:"3000/-"


     },
     {
         heading:"WebDevelopment Junior",
         subject:"HTML,CSS,JavaScript",
         duration:"3 months",
         fees:"5000/-"


     },
     {   
         heading:"C senior",
         subject:"C",
         duration:"2 months",
         fees:"2500/-"

     },
     { 
         heading:"C++ senior",
         subject:"C++",
         duration:"3 months",
         fees:"3000/-"

     },
     {
         
         heading:"Python senior",
         subject:"C++",
         duration:"3 months",
         fees:"3000/-"

     },
     {  
        
         heading:"Java senior",
         subject:"Core Java",
         duration:"3 months",
         fees:"3000/-"

     },
     {
         
         heading:"MERN Stack",
         subject:"MongoDb,Express,React,Nodejs",
         duration:"4 months",
         fees:"6000/-"

     },

     {
               
         heading:"Frontend",
         subject:"ReactJs and Redux",
         duration:"1 months",
         fees:"2500/-"


     },

     {  
         heading:"Backend",
         subject:"NodeJs and ExpressJs",
         duration:"2 months",
         fees:"3000/-"

     },
     {  
         heading:"DataBase",
         subject:"MongoDb and Postgressql",
         duration:"1 months",
         fees:"2000/-"

     },
      {  
         heading:"Git & GitHub",
         subject:"Git and Github",
         duration:"2 months",
         fees:"500/-"

   },
      {  
         heading:"Ds and Algo",
         subject:"DataStructure and Algorithm",
         duration:"3 months",
         fees:"5000/-"

     },
      {  
         heading:"Data Structures",
         subject:"Data Structures",
         duration:"2 months",
         fees:"3000/-"

     },
      {  
         heading:"Algorithm",
         subject:"Algorithm",
         duration:"2 months",
         fees:"3000/-"

   }

];


class Home extends React.Component{

    render(){
        return(
        <HomeWrapper>
          <HeadingWrapper>
             <ExploreWrapper>Explore your Potential</ExploreWrapper>
             <p>DevikTech students are always updated according to the current technologies.
                They are 3 years ahead of the student of their age.</p>
          </HeadingWrapper>
          <RowWrapper >
             <ColWrapper  xs={12} sm={3}>
                <p>Junior</p>
                <h5>Online Class</h5>
                <p>Live Lectures by Experts</p>
                <KnowMoreWrapper>
                   <NavLinkWrapper to ="/knowMoreJunior" exact >Know More</NavLinkWrapper>
                </KnowMoreWrapper>           
             </ColWrapper>
             <ColWrapper  xs={12} sm={3}>
                 <p>Senior</p>
                <h5>Online Class</h5>
                <p>Live Lectures by Experts</p>
                <KnowMoreWrapper>
                  <NavLinkWrapper to ="/knowMoreSenior" exact >Know More</NavLinkWrapper>
                </KnowMoreWrapper>
             </ColWrapper>      
          </RowWrapper>
          <ExploreNameWrapper>
          <h6>Explore Our Courses</h6>
          </ExploreNameWrapper>
          <AllCourseWrapper>
              {subjectInfo.map((item,index) => (
                   <CourseWrapper key={index}>
                      <HeadingSubWrapper> <h6>{item.heading} </h6></HeadingSubWrapper>
                      <SubjectWrapper><p>{item.subject}</p></SubjectWrapper>
                      <TimeFeesWrapper>
                        {/*  <p> {item.duration}</p>
                         <p>{item.fees}</p> */}
                       </TimeFeesWrapper>
                       <ApplyKnowMoreWrapper>
                           <ApplyWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Apply</ApplyWrapper>
                       </ApplyKnowMoreWrapper>
                   </CourseWrapper>

            ))
           }
           </AllCourseWrapper>
           <WhyUsWrapper>
            <DifferentHeadWrapper>
               <h4>How we are different?</h4>
            </DifferentHeadWrapper>
             <DifferentParaWrapper>
               <p>Live session by Expert.</p>
               <p>Get your doubt resolved anytime.</p>
               <p>Free demo session.</p>
               <p>Limited student in one batch because we don't compromise with quality</p>
               <p>Carrier counselling session.</p>
               <p>Enroll with our program and pay after 10 days because we care for your satifaction.</p>
            </DifferentParaWrapper>
           </WhyUsWrapper>
         
       </HomeWrapper>
        );

    }

}
export default Home;