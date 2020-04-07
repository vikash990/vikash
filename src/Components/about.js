import React from 'react';
import styled from "styled-components";


const AboutWrapper = styled('div')`
   
    

`;

const AboutUsInfoWrapper = styled('div')`
   display:flex;
   flex-direction:column;
   height:60vh;
   width:600px; 
   margin:30px 0px 50px 350px;
   padding:20px 60px;
   color:white;
   background-color:rgba(0,0,0,0.8); 
   box-shadow: 10px 10px 10px 10px  green;

   @media(max-width:768px) {
    margin:30px 5px;
    width:300px;
}
    
`;

const HeadWrapper = styled('div')`
    
    text-align:center;
    margin-bottom:30px;

`;

const DescriptionWrapper = styled('div')`
   

`;

class About extends React.Component{

    render(){
        return(
            <AboutWrapper>
               <AboutUsInfoWrapper>
                  <HeadWrapper>
                      <h5>DevikTech Education Services</h5>
                  </HeadWrapper>
                  <DescriptionWrapper>
                      <p>we at deviktech strongly believe that student has very high potential to 
                         achieve their goals.But due to lack of correct guidance they are unable to 
                         achieve their goals.We with the help of our expert provide best platform 
                         to achieve their goals.We help them to explore their potential.
                      </p>
                      <p>
                        Student can enroll with our live online courses and start building their 
                        bright future.Then can save time.We provide 10 days free lecture to the 
                        students so that they will get the option to understand our classes and
                        our expert because we care student satisfaction. 
                      </p>
                  </DescriptionWrapper>
               </AboutUsInfoWrapper>
            </AboutWrapper>
        );
    }
}

export default About;