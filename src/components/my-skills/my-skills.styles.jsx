import styled from 'styled-components';


export const MySkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

export const CurvedEdge = styled.div`
  background-color: #69bdff;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MySkillsCard = styled.div`
  background-color: white;
  width: 95%;
  height: 100%;
  border-radius: 200px;
  z-index: 2;
  display: flex;
  align-items: center;
`;

export const MySkillsText = styled.div`
  height: 400px;
  width: 140px;
  margin-left: 30px;
  transform: rotate(-180deg);
  
  p{
    font-size: 100px;
    font-weight: 100;
    writing-mode: vertical-lr;
  }
`;

export const MySkillsDescription = styled.div`
  width: 654px;
  height: 430px;
`;

export const SkillType = styled.div`
  width: 200px;
  height: 140px;
  
  img{
    width: 100%;
    height: 100%;
  }
`;