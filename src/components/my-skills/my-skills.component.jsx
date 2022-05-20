import React from 'react';
import UI_UX from '../../assets/icons/ui_ux.png';
import nextArrow from '../../assets/icons/next_arrow.svg'
import {
    CurvedEdge,
    MySkillsCard,
    MySkillsContainer,
    MySkillsDescription,
    MySkillsText,
    SkillType
} from "./my-skills.styles";

const MySkills = ({skillTypeLogo,skillLogo,skillLogoName}) => (
    <MySkillsContainer>
        <CurvedEdge/>
        <MySkillsCard>
            <MySkillsText>
                <p>My Skills</p>
            </MySkillsText>
            <MySkillsDescription>
                <SkillType>
                    <img src={UI_UX} alt={'skill type logo'}/>
                </SkillType>
            {/*    <SkillTitle><p>{skillTitle}</p></SkillTitle>*/}
            {/*    <SkillDescription><p>{skillDescription}</p></SkillDescription>*/}
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
    </MySkillsContainer>
)

export default MySkills;