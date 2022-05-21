import React from 'react';
import UI_UX from '../../assets/icons/uI_and_ux.svg';
import pageIndicatorBlue from '../../assets/icons/page_indicator_blue.svg';
import pageIndicatorGrey from '../../assets/icons/page_indicator_grey.svg';
import {
    CurvedEdge,
    MySkillsCard,
    MySkillsContainer,
    MySkillsDescription,
    MySkillsTitle, PageSelector,
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
                        I make designs that are simple and minimalistic. I choose the right color combination and I like putting items off the grid.
                    </p>
                </SkillDescription>
            </MySkillsDescription>
            {/*<MySkillLogoContainer>*/}
            {/*    <MySkillLogo>*/}
            {/*        <img src={skillLogo} alt={'skill logo'}/>*/}
            {/*        <p>{skillLogoName}</p>*/}
            {/*    </MySkillLogo>*/}
            {/*</MySkillLogoContainer>*/}
            {/*<NextSkillArrow>*/}
            {/*    <img src={nextArrow} alt={'next arrow'}/>*/}
            {/*</NextSkillArrow>*/}
        </MySkillsCard>
        <PageSelector>
            <img src={pageIndicatorBlue} alt="page indicator"/>
            <img src={pageIndicatorGrey} alt="page indicator"/>
            <img src={pageIndicatorGrey} alt="page indicator"/>
        </PageSelector>
    </MySkillsContainer>
)

export default MySkills;