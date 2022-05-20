import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position:relative;
`;

export const NameAndMottoContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #69BDFF;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 0;
  position:relative;
  
  @media screen and (max-width: 990px) {
    height: 50vh;
    width: 100%;
    border-radius: 0 0 50px 0;
  }
`;

export const HeroNameContainer = styled.div`
  width: 545px;
  height: 180px;
  text-align: start;
  margin: 200px 0 0 200px;
  
  p{
    font-size: 70px;
    font-weight: bold;
    color: white;
    line-height: 80px;
  }
  
  @media screen and (max-width: 990px) {
    margin: 50px 0 0 25px;
    width: 252px;
    height: 125px;
    p{
      font-size: 50px;
      line-height: 54px;
    }
  }
`;

export const HeroMotoContainer = styled.div`
  width: 390px;
  height: 89px;
  text-align: start;
  margin: 44px 0 0 200px;
  
  p{
    font-size: 30px;
    font-weight: bold;
    line-height: 46px;
  }
  
  @media screen and (max-width: 990px) {
    width: 257px;
    height: 58px;
    margin: 20px 0 0 25px;
    p{
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const BigInfinityContainer = styled.div`
  width: 738px;
  height: 390px;
  position: absolute;
  bottom: 0;
  right: -369px;
  
  #infinity{
    display: block;
    width: 100%;
    height: 100%;
  }
  
  #infinitySmall{
    display: none;
  }
  
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const SmallInfinityContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -59px;
  width: 0;
  height: 0;
  
  img{
    display: none;
  }  
  
  @media screen and (max-width: 990px) {
    display: flex;
    width: 100%;
    height: 116px;
    
    img{
      display: block;
    }
  }
`;