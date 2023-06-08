import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import info from '../../../../assets/info.svg'

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    background-color: White;
    border-radius: 8px;
    font-decoration: none;
    height: 45px;
    text-decoration: none;
    color: black;
    img {
        display: flex;
        height: 80%;
        // padding-inline: 10px;
        // padding-inline: ${props => props.text ? '10px' : 'none'}


    }
    span {
        display: flex;
        font-size: 150%;
        padding-right: 10px;
    }
`

const Info = (props) => {
    return (
        <StyledLink to={`/${props.movieId}`}><img src={info} alt="więcej informacji"/><span>{props.text}</span></StyledLink>    
    )
}

export default Info