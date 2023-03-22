import React from "react";
import "./Navbar.css"
import netflixLogo from "../../assets/netflixLogo.svg"
import search from "../../assets/search.svg"
import notifications from "../../assets/notifications.svg"
import arrow_drop_down from "../../assets/arrow_drop_down.svg"
import avatar from "../../assets/avatar.jpg"
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const All = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
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
    padding-left: 15px;
    color: White;
    &:hover {
        text-decoration: underline;
    }
    &.active {
        font-weight: bold;
    }
`
const PartOfNavbar = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 30px;
`
const Netflix = styled.img`
    width: 150px;
`
const Img = styled.img`
    color: White;
`

const Navbar = () => (
    <All>
        <ForAbsolutePosition>
            <PartOfNavbar>
                <Netflix className="navbarWrapper__img" src={netflixLogo} alt={"Logo"}/>
                <div className="navPanel">
                    <StyledNavLink to={"/nothing"}>Homepage</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>Series</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>Movies</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>New and Popular</StyledNavLink>
                    <StyledNavLink to={"/nothing"}>My List</StyledNavLink>
                </div>
            </PartOfNavbar>
            <PartOfNavbar>
                <Img className="navbarWrapper__search" src={search} alt={"Wyszukaj"}/>
                <div>KID</div>
                <Img src={notifications} alt={"Powiadomienia"}/>
                <img className="avatar" src={avatar} alt={"Avatar"}/>
                <Img src={arrow_drop_down} alt={"Rozwiń"}/>
            </PartOfNavbar>
        </ForAbsolutePosition>
    </All>
)

export default Navbar