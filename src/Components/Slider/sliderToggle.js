import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled('button')`
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:25px;
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

const SliderToggle = props => (
    <ButtonWrapper onClick={props.click}>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
        <ButtonLine/>
    </ButtonWrapper>
);

export default SliderToggle;