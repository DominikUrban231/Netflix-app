import React from "react";
import styled from "styled-components";
import heartPlus from '../../../../assets/heartPlus.svg'
import heartMinus from '../../../../assets/heartMinus.svg'

const StyledHeart = styled.img`
background-color: White;
border-radius: 8px;
cursor: pointer;
height: 5px;
// width: 45px;
`
const Heart = (props) => {
    return (
        <StyledHeart onClick={props.onClickHeart} src={heartPlus} alt={"polub film"}/>
    )
}

export default Heart