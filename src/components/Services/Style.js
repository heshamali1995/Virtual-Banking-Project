import styled from "styled-components";

/* Start Services Section */

export const ServicesSect = styled.article`
    width: 100%;
    min-height: 600px;
    background-color: #010606;
`;
export const ServicesDiv = styled.div`
    width: 100%;
    min-height: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media all and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
        grid: 0px;
    };
    @media all and (min-width: 576px) and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    };
`;
export const ServicesSection = styled.section`
    background-color: #fff;
    width: 100%;
    height: 400px;
    margin-top: 100px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    &:hover {
        width: 100%;
        height: 400px;
        transition: all 0.5s ease;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin-top: 70px;
    }
    @media all and (max-width: 575px) {
        margin-top: 50px;
        &:hover {
            margin-top: 50px;
        }
        :last-of-type {
            margin-bottom: 50px;
        }
    };
    @media all and (min-width: 576px) and (max-width: 767px) {
        :last-of-type {
            margin-bottom: 100px;
        }
    };
`;
export const ServicesSectionImg = styled.img`
    width: 100%;
    height: 50%;
    padding-top: 20px;
`;
export const ServicesSectionH4 =styled.h4`
    margin-top: 40px;
`;
export const ServicesSectionP = styled.p`
    margin-top: 20px;
`;

/* Start Services Section */