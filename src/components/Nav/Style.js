import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

/* Start Navbar */

export const NavSection = styled.nav`
    background-color: #010606;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 60px;
    z-index: 10;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const NavBarDiv = styled.div`
    display: flex;
`;
export const NavBarH1 = styled.h1`
    line-height: 60px;
    width: 15%;
`;
export const NavBarH1Link = styled(LinkR)`
    text-decoration: none;
    color: #fff;
`;
export const NavList = styled.ul`
    margin: auto;
    list-style-type: none;
    width: 70%;
    text-align: center;
    @media all and (max-width: 767px) {
        display: none;
    }
`;
export const NavListLi = styled.li`
    display: inline-block;
    &:hover {
        color: #01bf71;
    }
    :last-of-type a {
        margin-right: 0px;
    }
`;
export const NavListA = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    margin-right: 40px;
    position: relative;
    padding-bottom: 17px;
    cursor: pointer;
    &:hover {
        color: #01bf71;
        transition: all 0.4s ease; 
    }
    &.active {
        border-bottom: 3px solid #01bf71
    }
    @media all and (min-width: 768px) and (max-width: 991px) {
        margin-right: 20px;
    }
`;
export const NavBarButton = styled.button`
    margin-left: auto;
    padding: 10px 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #01bf71;
    border-radius: 30px;
    border: none;
    &:hover {
        background-color: #fff;
        transition: all 0.4s ease;
    }
    @media all and (max-width: 767px) {
        display: none;
    }
`;
export const NavBarButtonA = styled(LinkR)`
    width: 100%;
    font-size: 16px;
    text-decoration: none;
    color: #010606;
    font-weight: bold;
    padding: 10px 30px;
    @media all and (min-width: 768px) and (max-width: 991px) {
        padding: 10px 10px;
    }
`;

/* Start Setting Section */

export const SettingBars = styled.li`
    color: #fff;
    font-size: 34px;
    cursor: pointer;
    margin-left: auto;
    line-height: 60px;
    display: none;
    @media all and (max-width: 767px) {
        display: block;
    }
`;
export const SettingDiv = styled.div`
    position: absolute;
    left: 0px;
    width: 100%;
    height: 600px;
    background-color: #010606;
    margin-top: 60px;
    display: ${ ( {isOpen} ) => (isOpen ? "block" : "none") };
`;
export const CloseButton = styled.div`
    color: #fff;
    display: flex;
    margin: auto;
    width: 80%;
`;
export const CloseButtonI = styled.i`
    margin-left: auto;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
    margin-top: 30px;
    &:hover {
        color: #01bf71;
    }
`;
export const RespLists = styled.ul`
    margin: auto;
    list-style-type: none;
    width: 80%;
    text-align: center;
`;
export const RespListsLi = styled.li`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    &:hover {
        background-color: #01bf71;
        transition: all 0.4s ease;
    }
`;
export const RespListsA = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    line-height: 50px;
    padding: 10px 50px;
    cursor: pointer;
`;
export const RespBtn = styled.button`
    display: block;
    margin: auto;
    text-align: center;
    padding: 10px 0px;
    background-color: #01bf71;
    border-radius: 30px;
    border: none;
    margin-top: 30px;
    &:hover {
        background-color: #fff;
        transition: all 0.4s ease;
    }
`;
export const RespBtnA = styled(LinkR)`
    font-size: 16px;
    text-decoration: none;
    color: #010606;
    font-weight: bold;
    padding: 10px 80px;
`;

/* End Setting Section */

/* End Navbar */