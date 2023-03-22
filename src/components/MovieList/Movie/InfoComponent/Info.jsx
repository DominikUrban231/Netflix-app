import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import info from '../../../../assets/info.svg'

const InfoButton = styled(Link)`
    color: White;
`

const Info = (props) => {
    return (
        <InfoButton to={`/${props.movieId}`}><img src={info} alt="więcej informacji"/>{props.text}</InfoButton>    
    )
}

export default Info