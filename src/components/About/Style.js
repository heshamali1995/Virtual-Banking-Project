import styled from "styled-components";

/* Start About Section */

export const AboutSection = styled.article`
    height: 600px;
    background-color: #010606;
`;
export const AboutDiv = styled.div`
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    gap: 15px;
    @media all and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const AboutLeft = styled.section`
    color: #fff;
    width: 100%;
    height: 100%;
`;
export const AboutLeftH2 = styled.h2`
    color: #01bf71;
`;
export const AboutLeftH3 = styled.h3`
    margin-top: 20px;
    font-size: 28px;
`;
export const AboutLeftH3Span = styled.span`
    display: block;
`;
export const AboutLeftP = styled.p`
    margin-top: 20px;
`;
export const AboutLeftBtn = styled.button`
    margin-top: 30px;
    padding: 15px 40px;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    background-color: #01bf71;
    &:hover {
        background-color: #fff;
        transition: all 0.4s ease;
    }
`;
export const BtnI = styled.i`
    margin-left: 10px;
`;
export const AboutRight = styled.section`
    width: 100%;
    height: 100%;
    background-image: url("./images/car.svg");
    background-size: 100% 100%;
    @media all and (max-width: 575px) {
        display: none
    }
`;

/* End About Section */