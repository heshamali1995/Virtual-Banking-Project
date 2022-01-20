import React from 'react';
import {
    SignupSection,
    SignupDiv,
    SignupLeft,
    SignupLeftH2,
    SignupLeftH3,
    SignUpLeftSpan,
    SignupLeftP,
    SignupLeftBtn,
    SignupBtnA,
    SignupRight
} from "./Style.js";

function SignUp() {
    return (
        <SignupSection id="signup">
            <div className="container">
                <SignupDiv>
                    <SignupLeft>
                        <SignupLeftH2>JOIN OUR TEAM</SignupLeftH2>
                        <SignupLeftH3>Creating an <SignUpLeftSpan>account is extremely easy</SignUpLeftSpan></SignupLeftH3>
                        <SignupLeftP>Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go</SignupLeftP>
                        <SignupLeftBtn id="startnow"><SignupBtnA to="getstarted" smooth={true} offset={-200} duration={500}>Start Now</SignupBtnA></SignupLeftBtn>
                    </SignupLeft>
                    <SignupRight></SignupRight>
                </SignupDiv>
            </div>
        </SignupSection>
    )
}

export default SignUp;