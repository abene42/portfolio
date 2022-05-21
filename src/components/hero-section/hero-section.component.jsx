import React from 'react';
import infinity from '../../assets/icons/infinity.svg';
import infinitySmall from '../../assets/icons/infinity_small.svg';
import curve from '../../assets/icons/curve.svg';
import {
    HeroMotoContainer,
    HeroNameContainer,
    HeroSectionContainer,
    BigInfinityContainer,
    NameAndMottoContainer, SmallInfinityContainer, HeroSectionCurve
} from "./hero-section.styles";

const HeroSection = () => (
    <HeroSectionContainer>
        <NameAndMottoContainer>
            <HeroNameContainer>
                <p>Abenezer Ayalneh</p>
            </HeroNameContainer>
            <HeroMotoContainer>
                <p>Deigns full of Infinite Creativity.</p>
            </HeroMotoContainer>
            <BigInfinityContainer>
                <img id="infinity" src={infinity} alt={'infinity'}/>
            </BigInfinityContainer>
            <SmallInfinityContainer>
                <img id="infinitySmall" src={infinitySmall} alt={'infinity small'}/>
            </SmallInfinityContainer>
        </NameAndMottoContainer>
        <HeroSectionCurve>
            <img src={curve} alt="curve image"/>
        </HeroSectionCurve>
    </HeroSectionContainer>
);

export default HeroSection;