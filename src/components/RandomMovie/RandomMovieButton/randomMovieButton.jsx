import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    // width: 155px;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    img {
        display: flex;
        height: 100%;
    }
    span {
        display: flex;
        font-size: 150%;
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