import styled from "styled-components";
import {Link as LinkS} from "react-scroll";

/* Start Signup Section */

export const SignupSection = styled.article`
    height: 600px;
    background-color: #fff;
`;
export const SignupDiv = styled.div`
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    @media all and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
    };
`;
export const SignupLeft = styled.section`
    color: #010606;
    width: 100%;
    height: 100%;
`;
export const SignupLeftH2 = styled.h2`
    color: #01bf71;
`;
export const SignupLeftH3 = styled.h3`
    margin-top: 20px;
    font-size: 28px;
`;
export const SignUpLeftSpan = styled.span`
    display: block;
`;
export const SignupLeftP = styled.p`
    margin-top: 20px;
`;
export const SignupLeftBtn = styled.button`
    margin-top: 30px;
    padding: 15px 0px;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    background-color: #010606;
    color: #fff;
    &:hover {
        background-color: #01bf71;
        transition: all 0.4s ease;
    };
`;
export const SignupBtnA = styled(LinkS)`
    padding: 15px 50px;
`;
export const SignupRight = styled.section`
    width: 100%;
    height: 100%;
    background-image: url("./images/sign.svg");
    background-size: 100% 100%;
    @media all and (max-width: 575px) {
        display: none
    };
`;

/* End Signup Section */