import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

/* Start Signin Section */

export const SigninSect = styled.article`
    width: 100%;
    height: 660px;
    background-color: #01bf71;
    position: relative;
`;
export const SigninDiv = styled.div`
    position: absolute;
    width: 35%;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #010606;
    color: #fff;
    padding: 20px;
    @media all and (max-width: 575px) {
        width: 90%;
    }
    @media all and (min-width: 576px) and (max-width: 767px) {
        width: 60%;
    }
`;
export const SigninLogo = styled.h2`
    padding-top: 25px;
    text-align: center;
    cursor: pointer;
`;
export const SigninLink = styled(LinkR)`
    text-decoration: none;
    color: #010606;
    &:hover {
        color: #fff;
    }
`;
export const SigninH4 = styled.h4`
    margin-top: 50px;
    text-align: center;
`;
export const SigninLabel = styled.label`
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
`;
export const SigninInput = styled.input`
    caret-color: #01bf71;
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
`;
export const SigninBtn = styled.button`
    width: 100%;
    background-color: #01bf71;
    color: #010606;
    border: none;
    cursor: pointer;
    height: 50px;
    border-radius: 10px;
    margin-top: 30px;
    font-weight: bold;
    &:hover {
        background-color: #fff;
    }
`;
export const SigninP = styled.p`
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        color: #01bf71;
    }
`;

/* End Signin Section */