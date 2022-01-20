import styled from "styled-components";

/* Start Discover Section */

export const DiscoverSection = styled.article`
    width: 100%;
    height: 600px;
    background-color: #fff;
`;
export const DiscoverDiv = styled.div`
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #010606;
    align-content: center;
    gap: 15px;
    @media all and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const DiscoverLeft = styled.section`
    width: 100%;
    height: 100%;
    background-image: url("./images/savings.svg");
    background-size: 100% 100%;
    @media all and (max-width: 575px) {
        display: none;
    }
`;
export const DiscoverRight = styled.section`
    width: 100%;
    height: 100%;
`;
export const DiscoverRightH2 = styled.h2`
    color: #01bf71;
`;
export const DiscoverRightH3 = styled.h3`
    margin-top: 20px;
    font-size: 28px;
`;
export const DiscoverRightP = styled.p`
    margin-top: 20px;
`;
export const DiscoverRightBtn = styled.button`
    margin-top: 30px;
    padding: 15px 50px;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    background-color: #010606;
    color: #fff;
    &:hover {
        background-color: #01bf71;
        transition: all 0.4s ease;
    }
`;

/* End Discover Section */