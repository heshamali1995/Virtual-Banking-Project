import styled from "styled-components";
import {Link as LinkS} from "react-scroll";

/* Start Header Section */

export const HeaderSection = styled.header`
    margin-top: 60px;
    height: 600px;
    background-color: #010606;
    color: #fff;
    text-align: center;
    position: relative;
`;
export const HeaderVideo = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    z-index: 5;
`;
export const VideoTag = styled.video`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    -webkit-object-fit: cover;
    -o-object-fit: cover;
    -moz-object-fit: cover;
    object-fit: cover;
`;
export const HeaderText = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 6;
`;
export const TextH2 = styled.h2`
    padding-top: 200px;
    font-size: 36px;
    @media all and (max-width: 575px) {
        font-size: 26px;
    }
`;
export const TextP = styled.p`
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    @media all and (max-width: 575px) {
        font-size: 18px;
    }
`;
export const TextPSpan = styled.span`
    display: block;
`;
export const TextButton = styled.button`
    margin-top: 30px;
    padding: 15px 0px;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    background-color: #01bf71;
    &:hover {
        background-color: #fff;
        transition: all 0.4s ease;
    }
`;
export const ButtonA = styled(LinkS)`
    padding: 15px 40px;
`;
export const ButtonI = styled.i`
    margin-left: 10px;
`;

/* End Header Section */