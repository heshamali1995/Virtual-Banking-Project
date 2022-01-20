import React from 'react';
import {
    HeaderSection,
    HeaderVideo,
    VideoTag,
    HeaderText,
    TextH2,
    TextP,
    TextPSpan,
    TextButton,
    ButtonA,
    ButtonI
} from "./Style.js";

function Header() {
    return (
        <HeaderSection>
            <HeaderVideo>
                <VideoTag autoPlay muted loop src="./videos/video.mp4" type="video/mp4"></VideoTag>
            </HeaderVideo>
            <HeaderText>
                <div className="container">
                    <TextH2>Virtual Banking Made Easy</TextH2>
                    <TextP>Sign up for a new account today and receive $250 <TextPSpan>in credit towards your next payment</TextPSpan></TextP>
                    <TextButton id="getstarted">
                        <ButtonA to="startnow" smooth={true} duration={500} offset={-200}>Get Started <ButtonI className="fas fa-arrow-right"></ButtonI></ButtonA>
                    </TextButton>
                </div>
            </HeaderText>
        </HeaderSection>
    )
}

export default Header;