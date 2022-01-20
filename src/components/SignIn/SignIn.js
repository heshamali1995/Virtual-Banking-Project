import React, {useRef, useEffect} from 'react';
import {
    SigninSect,
    SigninLogo,
    SigninLink,
    SigninDiv,
    SigninH4,
    SigninLabel,
    SigninInput,
    SigninBtn,
    SigninP
} from "./Style.js";

function SignIn() {
    let inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <SigninSect>
            <div className="container">
                <SigninLogo>
                    <SigninLink to="/">Go To Home Page</SigninLink>
                </SigninLogo>
                <SigninDiv>
                    <SigninH4>Sign in to your account</SigninH4>
                    <SigninLabel>Email</SigninLabel>
                    <SigninInput type="email" placeholder="Type your email" ref={inputRef}/>
                    <SigninLabel>Password</SigninLabel>
                    <SigninInput type="password" placeholder="Type your password" />
                    <SigninBtn>Continue</SigninBtn>
                    <SigninP>Forgot Password ?</SigninP>
                </SigninDiv>
            </div>
        </SigninSect>
    )
}

export default SignIn;