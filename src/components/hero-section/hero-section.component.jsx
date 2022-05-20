import React from 'react';
import infinity from '../../assets/icons/infinity.svg';
import infinitySmall from '../../assets/icons/infinity_small.svg';
import {
    HeroMotoContainer,
    HeroNameContainer,
    HeroSectionContainer,
    BigInfinityContainer,
    NameAndMottoContainer, SmallInfinityContainer
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
    </HeroSectionContainer>
);

export default HeroSection;