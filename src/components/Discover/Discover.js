import React from 'react';
import {
    DiscoverSection,
    DiscoverDiv,
    DiscoverLeft,
    DiscoverRight,
    DiscoverRightH2,
    DiscoverRightH3,
    DiscoverRightP,
    DiscoverRightBtn
} from "./Style.js";

function Discover() {
    return (
        <DiscoverSection id="discover">
            <div className="container">
                <DiscoverDiv>
                    <DiscoverLeft></DiscoverLeft>
                    <DiscoverRight>
                        <DiscoverRightH2>Unlimited Access</DiscoverRightH2>
                        <DiscoverRightH3>Log in to your account at any time</DiscoverRightH3>
                        <DiscoverRightP>We have you covered no matter where you are located. All you need is an internet connection and a phone or a computer</DiscoverRightP>
                        <DiscoverRightBtn>Learn More</DiscoverRightBtn>
                    </DiscoverRight>
                </DiscoverDiv>
            </div>
        </DiscoverSection>
    )
}

export default Discover;