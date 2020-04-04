import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled('div')`
     
    min-height:65vh;


`;


class Home extends React.Component{

    render(){
        return(
        <HomeWrapper>
          <p>Hi Home</p>
       </HomeWrapper>
        );

    }

}
export default Home;