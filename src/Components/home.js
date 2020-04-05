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
          margin-left:10px;
          width: 300px;
      }

`;
const ExploreWrapper = styled('h4')`
     margin:20px 0px 0px 80px;
      @media(max-width:768px) {
          margin:20px 0px 0px 25px;
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
   height:40px;
   padding:3px 0px 0px 6px;
   background-color:orange;
   border-radius:9px;

`;

const AllCourseWrapper = styled('div')`
    
    
   
    

`;
const CourseWrapper = styled('div')`
  display:flex;
  flex-direction:column;
  margin:60px 100px;
  width:220px;
  padding:10px 5px 5px 30px;
  color:white;
  background-color:black;
  box-shadow: 3px 5px 10px 10px green;
           @media(max-width:768px) {
          margin:30px 50px;
      }
  
`;
const HeadingSubWrapper = styled('div')`
  
`;
const SubjectWrapper = styled('div')`
  
`;
const TimeFeesWrapper = styled('div')`
  
`;

const subjectInfo= [
     {
         heading:"Python Junior",
         subject:"Python",
         duration:"2 months",
         fees:"3000/-"


     },
     {
         heading:"Python Junior",
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
         subject:"MongoDb,Expressjs,Reactjs,NodeJs",
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
          <AllCourseWrapper>
              {subjectInfo.map((item,index) => (
                   <CourseWrapper key={index}>
                      <HeadingSubWrapper> <h6>{item.heading} </h6></HeadingSubWrapper>
                      <SubjectWrapper><p>{item.subject}</p></SubjectWrapper>
                      <TimeFeesWrapper>
                         <p> {item.duration}</p>
                         <p>{item.fees}</p>
                       </TimeFeesWrapper>
                    </CourseWrapper>

            ))
           }
           </AllCourseWrapper>
         
       </HomeWrapper>
        );

    }

}
export default Home;