import styled from "styled-components";

/* Start Footer Section */

export const FooterSect = styled.footer`
    width: 100%;
    background-color: #010606;
    color: #fff;
`;
export const FooterDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media all and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    };
    @media all and (min-width: 576px) and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    };
`;
export const FooterSectionH4 = styled.h4`
    margin-top: 50px;
    margin-bottom: 20px;
`
export const FooterUl = styled.ul`
    list-style: none;
`;
export const FooterUlList = styled.li`
    margin-top: 10px;
`;
export const FooterBottom = styled.div`
    width: 100%;
    margin-top: 50px;
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
    @media all and (max-width: 575px) {
        text-align: center;
        grid-template-columns: repeat(1, auto);
    };
    @media all and (min-width: 576px) and (max-width: 767px) {
        text-align: center;
        grid-template-columns: repeat(1, auto);
    };
`;
export const BottomLinksI = styled.i`
    cursor: pointer;
    margin-right: 20px;
    &:hover {
        color: #01bf71;
    }
    :last-of-type {
        margin-right: 0px;
    }
    @media all and (max-width: 767px) {
        margin-top: 20px;
    };
`;

/* End Footer Section */