import React, {useState} from 'react';
import {
    HeaderChevronContainer,
    HeaderContainer,
    HeaderLink,
    HeaderLinks,
    HeaderLinksContainer,
    HeaderSocialMediaContainer,
    HiddenMenuCloseButtonContainer,
    HiddenMenuContainer,
    HiddenMenuNavButton,
    HiddenMenuSocialPlatformsContainer,
    HiddenMenuShadow,
    Logo,
    LogoContainer
} from "./header.styles";
import logo from '../../assets/icons/logo.svg';
import linkedIn from '../../assets/icons/linkedIn-icon.svg';
import github from '../../assets/icons/github-icon.svg';
import {RiCloseLine} from "react-icons/ri";
import {FaBars} from "react-icons/fa";

const Header = () => {
    let [showHiddenMenu, setShowHiddenMenu] = useState(null);

    return (
        <HeaderContainer id="home">
            <HeaderLinksContainer>
                <LogoContainer href="#home">
                    <Logo src={logo}/>
                </LogoContainer>
                <HeaderLinks>
                    <HeaderLink><a href="#my-skills">My Skills</a></HeaderLink>
                    <HeaderLink><a href="#">My Work</a></HeaderLink>
                    <HeaderLink><a href="#">Contact Me</a></HeaderLink>
                </HeaderLinks>
            </HeaderLinksContainer>
            <HeaderSocialMediaContainer>
                <div>
                    <img src={linkedIn} alt={'linkedIn'}/>
                    <img src={github} alt={'github'}/>
                </div>
            </HeaderSocialMediaContainer>
            <HeaderChevronContainer>
                <FaBars color='#FFFFFF' size={30} onClick={() => setShowHiddenMenu(true)}/>
            </HeaderChevronContainer>
            <HiddenMenuContainer className="slide-left" isOpen={showHiddenMenu}>
                <HiddenMenuCloseButtonContainer>
                    <RiCloseLine color='#69BDFF' size={30} onClick={() => setShowHiddenMenu(false)}/>
                </HiddenMenuCloseButtonContainer>
                <HiddenMenuNavButton>Home</HiddenMenuNavButton>
                <HiddenMenuNavButton>My Skills</HiddenMenuNavButton>
                <HiddenMenuNavButton>My Works</HiddenMenuNavButton>
                <HiddenMenuNavButton>Contact Me</HiddenMenuNavButton>
                <HiddenMenuSocialPlatformsContainer>
                    <img src={linkedIn} alt={'linkedIn icon'}/>
                    <img src={github} alt={'github icon'}/>
                </HiddenMenuSocialPlatformsContainer>
            </HiddenMenuContainer>
        </HeaderContainer>
    )
}

export default Header;