import React from 'react';
import {
    AboutSection,
    AboutDiv,
    AboutLeft,
    AboutLeftH2,
    AboutLeftH3,
    AboutLeftH3Span,
    AboutLeftP,
    AboutLeftBtn,
    BtnI,
    AboutRight
} from "./Style.js";

function About() {
    return (
        <AboutSection id="about">
            <div className="container">
                <AboutDiv>
                    <AboutLeft>
                        <AboutLeftH2>PREMIUM BANK</AboutLeftH2>
                        <AboutLeftH3>Unlimited <AboutLeftH3Span>Transactions With Zero Fees</AboutLeftH3Span></AboutLeftH3>
                        <AboutLeftP>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</AboutLeftP>
                        <AboutLeftBtn>Get Started <BtnI className="fas fa-arrow-right"></BtnI></AboutLeftBtn>
                    </AboutLeft>
                    <AboutRight></AboutRight>
                </AboutDiv>
            </div>
        </AboutSection>
    )
}

export default About;