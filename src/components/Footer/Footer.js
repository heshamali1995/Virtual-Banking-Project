import React from 'react';
import {
    FooterSect,
    FooterDiv,
    FooterSectionH4,
    FooterUl,
    FooterUlList,
    FooterBottom,
    BottomLinksI
} from "./Style.js";

function Footer() {
    return (
        <FooterSect>
            <div className="container">
                <FooterDiv>
                    <section>
                        <FooterSectionH4>About Us</FooterSectionH4>
                        <FooterUl>
                            <FooterUlList>How It Works</FooterUlList>
                            <FooterUlList>Testimonials</FooterUlList>
                            <FooterUlList>Careers</FooterUlList>
                            <FooterUlList>Investors</FooterUlList>
                            <FooterUlList>Terms Of Service</FooterUlList>
                        </FooterUl>
                    </section>
                    <section>
                        <FooterSectionH4>Contact Us</FooterSectionH4>
                        <FooterUl>
                            <FooterUlList>Contact</FooterUlList>
                            <FooterUlList>Support</FooterUlList>
                            <FooterUlList>Destinations</FooterUlList>
                            <FooterUlList>Sponsorships</FooterUlList>
                        </FooterUl>
                    </section>
                    <section>
                        <FooterSectionH4>Videos</FooterSectionH4>
                        <FooterUl>
                            <FooterUlList>Submit Videos</FooterUlList>
                            <FooterUlList>Ambassadors</FooterUlList>
                            <FooterUlList>Agency</FooterUlList>
                            <FooterUlList>Influencer</FooterUlList>
                        </FooterUl>
                    </section>
                    <section>
                        <FooterSectionH4>Social Media</FooterSectionH4>
                        <FooterUl>
                            <FooterUlList>Facebook</FooterUlList>
                            <FooterUlList>Instagram</FooterUlList>
                            <FooterUlList>Twitter</FooterUlList>
                            <FooterUlList>Youtube</FooterUlList>
                        </FooterUl>
                    </section>
                </FooterDiv>
                <FooterBottom>
                    <p>Banking &copy; 2022 All Copyrights Are Reserved</p>
                    <div className="social-links">
                        <BottomLinksI className="fab fa-2x fa-facebook"></BottomLinksI>
                        <BottomLinksI className="fab fa-2x fa-instagram"></BottomLinksI>
                        <BottomLinksI className="fab fa-2x fa-twitter-square"></BottomLinksI>
                        <BottomLinksI className="fab fa-2x fa-youtube"></BottomLinksI>
                    </div>
                </FooterBottom>
            </div>
        </FooterSect>
    )
}

export default Footer;