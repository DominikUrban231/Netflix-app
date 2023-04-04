import React, { useEffect } from "react";
import "./Navbar.css"
import netflixLogo from "../../assets/netflixLogo.svg"
import search from "../../assets/search.svg"
import notifications from "../../assets/notifications.svg"
import arrow_drop_down from "../../assets/arrow_drop_down.svg"
import avatar from "../../assets/avatar.jpg"
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import { useRef } from "react";

const StyledNavbar = styled.div`
    position: -webkit-fixed;
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    background: ${props => !props.isScrolling && "linear-gradient(rgba(20, 20, 20, 1), rgba(20, 20, 20, 0))"};
    background-color: ${props => props.isScrolling && "rgb(20, 20, 20)"};
    top: 0;
    z-index: 20;
`
const ForAbsolutePosition = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: linear-gradient(rgba(20, 20, 20, 1), rgba(20, 20, 20, 0));
    `
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding-left: 20px;
    color: #e5e5e5;
    &:hover {
        text-decoration: underline;
    }
    &.active {
        font-weight: bold;
    }
`
const StyledPartOfNavbar = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 60px;
    padding-block: 15px;
`
const StyledNetflixImg = styled.img`
    width: 110px;
    padding-right: 30px;
`
const Img = styled.img`
    height: 65%;
    padding-left: 10px
`
const Avatar = styled.img`
    height: 75%;
    width: 45px;
    padding-left: 10px;
`



const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            // console.log(window.scrollY)
            if (window.scrollY > 0) {
                setIsScrolling(true);
            }
            else {
                setIsScrolling(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <StyledNavbar isScrolling={isScrolling}>
        {/* <ForAbsolutePosition> */}
            <StyledPartOfNavbar>
                <StyledNetflixImg className="navbarWrapper__img" src={netflixLogo} alt={"Logo"}/>
                <div className="navPanel">
                    <StyledNavLink to={"/nothing"}>Homepage</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>Series</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>Movies</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>New and Popular</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>My List</StyledNavLink>
                </div>
            </StyledPartOfNavbar>
            <StyledPartOfNavbar>
                <Img className="navbarWrapper__search" src={search} alt={"Wyszukaj"}/>
                <Img src={notifications} alt={"Powiadomienia"}/>
                <Avatar className="avatar" src={avatar} alt={"Avatar"}/>
                <Img src={arrow_drop_down} alt={"Rozwiń"}/>
            </StyledPartOfNavbar>
        {/* </ForAbsolutePosition> */}
    </StyledNavbar>
    )
}

export default Navbar