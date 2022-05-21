import styled from 'styled-components';


export const MySkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const CurvedEdge = styled.div`
  background-color: #69bdff;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const MySkillsCard = styled.div`
  background-color: white;
  width: 92%;
  height: 100%;
  border-radius: 200px;
  z-index: 2;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 990px) {
    border-radius: 50px;
    width: 100%;
  }
`;

export const MySkillsTitle = styled.div`
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
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  img{
    width: 80%;
    height: 80%;
  }
`;

export const SkillTypeName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p{
    font-size: 25px;
    font-weight: bold;
  }
`;

export const SkillTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  
  p{
    font-size: 40px;
    font-weight: bold;
    color: #000000;
  }
`;

export const SkillDescription = styled.div`
  width: 100%;
  height: 100%;
  
  p{
    font-size: 25px;
    font-weight: 500;
    color: #000000;
    text-align: left;
  }
`;

export const PageSelector = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  
  img{
    margin: 0 5px;
  }
`;