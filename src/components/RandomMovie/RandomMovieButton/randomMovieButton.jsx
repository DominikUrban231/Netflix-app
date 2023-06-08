import React from "react";
import styled from "styled-components";

const Button = styled.div`
    display: flex;
    height: 45px;
    background-color: White;
    color: Black;
    border-radius: 8px;
    margin-right: 10px;
    align-items: center;
    img {
        display: flex;
        height: 100%;
    }
    span {
        display: flex;
        font-size: 150%;
        padding-inline: 10px;
    }
`
const RandomMovieButton = ({icon, text}) => {
    if(icon && text) {
        return (
            <Button>
                <img src={icon} alt={text}/>
                <span>{text}</span>
            </Button>
        )
    } else
    return (
        <Button>
            <img src={icon} alt={text}/>
        </Button>       
    )
}

export default RandomMovieButton