import React from "react";
import styled from "styled-components";
import heartPlus from '../../../../assets/heartPlus.svg'

const Img = styled.svg`
    path {
        fill:
    }
`

const Heart = (props) => (
    // const onClickImage = () => {}
    //save to localStorage
    //removeFromLocalStorage
    <img onClick={props.onClickHeart} src={heartPlus} alt={"polób film"}/>
)

export default Heart