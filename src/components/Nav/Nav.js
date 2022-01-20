import React from 'react';
import { 
    NavSection,
    NavBarDiv,
    NavBarH1,
    NavBarH1Link,
    NavList,
    NavListLi,
    NavListA,
    NavBarButton,
    NavBarButtonA,
    SettingBars,
    SettingDiv,
    CloseButton,
    CloseButtonI,
    RespLists,
    RespListsLi,
    RespListsA,
    RespBtn,
    RespBtnA
} from "./Style.js";

function Nav({toggleNavList, isOpen}) {
    return (
        <NavSection>
            <div className="container">
                <NavBarDiv>
                    <NavBarH1>
                        <NavBarH1Link to="/">Banking</NavBarH1Link>
                    </NavBarH1>
                    <NavList>
                        <NavListLi>
                            <NavListA to="about" duration={500} offset={-60} smooth={true} spy={true}>About</NavListA>
                        </NavListLi>
                        <NavListLi>
                            <NavListA to="discover" duration={500} offset={-60} smooth={true} spy={true}>Discover</NavListA>
                        </NavListLi>
                        <NavListLi>
                            <NavListA to="services" duration={500} offset={-60} smooth={true} spy={true}>Services</NavListA>
                        </NavListLi>
                        <NavListLi>
                            <NavListA to="signup" duration={500} offset={-60} smooth={true} spy={true}>Sign Up</NavListA>
                        </NavListLi>
                    </NavList>
                    <NavBarButton>
                        <NavBarButtonA to="/signin">Sign In</NavBarButtonA>
                    </NavBarButton>
                    <SettingBars className="fas fa-bars" onClick={toggleNavList}></SettingBars>
                    <SettingDiv isOpen={isOpen}>
                        <CloseButton>
                            <CloseButtonI className="fas fa-times" onClick={toggleNavList}></CloseButtonI>
                        </CloseButton>
                        <RespLists>
                            <RespListsLi>
                                <RespListsA to="about" duration={500} offset={-60} smooth={true} onClick={toggleNavList}>About</RespListsA>
                            </RespListsLi>
                            <RespListsLi>
                                <RespListsA to="discover" duration={500} offset={-60} smooth={true} onClick={toggleNavList}>Discover</RespListsA></RespListsLi>
                            <RespListsLi>
                                <RespListsA to="services" duration={500} offset={-60} smooth={true} onClick={toggleNavList}>Services</RespListsA>
                            </RespListsLi>
                            <RespListsLi>
                                <RespListsA to="signup" duration={500} offset={-60} smooth={true} onClick={toggleNavList}>Sign Up</RespListsA>
                            </RespListsLi>
                        </RespLists>
                        <RespBtn>
                            <RespBtnA to="/signin" onClick={toggleNavList}>Sign In</RespBtnA>
                        </RespBtn>
                    </SettingDiv>
                </NavBarDiv>
            </div>
        </NavSection>
    )
}

export default Nav;