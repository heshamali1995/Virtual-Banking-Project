import React from 'react';
import {
    ServicesSect,
    ServicesDiv,
    ServicesSection,
    ServicesSectionImg,
    ServicesSectionH4,
    ServicesSectionP
} from "./Style.js";

function Services() {
    return (
        <ServicesSect id="services">
            <div className="container">
                <ServicesDiv>
                    <ServicesSection>
                        <ServicesSectionImg src="./images/car.svg"/>
                        <ServicesSectionH4>Reduce Expenses</ServicesSectionH4>
                        <ServicesSectionP>We help reduce your fees and increase your overall revenue</ServicesSectionP>
                    </ServicesSection>
                    <ServicesSection>
                        <ServicesSectionImg src="./images/offices.svg"/>
                        <ServicesSectionH4>Virtual Offices</ServicesSectionH4>
                        <ServicesSectionP>You can access our platform online anywhere in the world</ServicesSectionP>
                    </ServicesSection>
                    <ServicesSection>
                        <ServicesSectionImg src="./images/card.svg"/>
                        <ServicesSectionH4>Premium Benefits</ServicesSectionH4>
                        <ServicesSectionP>Unlock our special membership card that returns 5% cash back</ServicesSectionP>
                    </ServicesSection>
                </ServicesDiv>
            </div>
        </ServicesSect>
    )
}

export default Services;