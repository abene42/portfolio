import React from 'react';
import UI_UX from '../../assets/icons/uI_and_ux.svg';
import pageIndicatorBlue from '../../assets/icons/page_indicator_blue.svg';
import pageIndicatorGrey from '../../assets/icons/page_indicator_grey.svg';
import adobeXdLogo from '../../assets/icons/adobe_xd_logo.svg';
import nextArrow from '../../assets/icons/next_arrow.svg';
import {
    CurvedEdge,
    MySkillLogo,
    MySkillLogoContainer,
    MySkillsCard,
    MySkillsContainer,
    MySkillsDescription,
    MySkillsTitle, NextSkillArrow,
    PageSelector,
    SkillDescription,
    SkillTitleContainer,
    SkillType,
    SkillTypeName
} from "./my-skills.styles";

const MySkills = ({skillTypeLogo, skillLogo, skillLogoName}) => (
    <MySkillsContainer id="my-skills">
        <CurvedEdge/>
        <MySkillsCard>
            <MySkillsTitle>
                <p>My Skills</p>
            </MySkillsTitle>
            <MySkillsDescription>
                <SkillType>
                    <img src={UI_UX} alt={'skill type logo'}/>
                    <SkillTypeName>
                        <p>UI & UX DESIGN</p>
                    </SkillTypeName>
                </SkillType>
                <SkillTitleContainer>
                    <p>Minimal web and mobile design</p>
                </SkillTitleContainer>
                <SkillDescription>
                    <p>
                        I make designs that are simple and minimalistic. I try to choose the right color combination and I like
                        putting items off the grid.
                    </p>
                </SkillDescription>
            </MySkillsDescription>
            <MySkillLogoContainer>
                <MySkillLogo>
                    <img src={adobeXdLogo} alt={'skill logo'}/>
                    <p>Adobe XD</p>
                </MySkillLogo>
            </MySkillLogoContainer>
            <NextSkillArrow>
                <img src={nextArrow} alt={'next arrow'}/>
            </NextSkillArrow>
            <PageSelector>
                <img src={pageIndicatorBlue} alt="page indicator"/>
                <img src={pageIndicatorGrey} alt="page indicator"/>
                <img src={pageIndicatorGrey} alt="page indicator"/>
            </PageSelector>
        </MySkillsCard>
    </MySkillsContainer>
)

export default MySkills;