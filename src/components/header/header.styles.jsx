import styled, {css} from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  position: relative;
`;

export const HeaderLinksContainer= styled.div`
  width: 70%;
  height: 100%;
  background-color: #69bdff;
  border-radius: 0 20px 0 0;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 990px) {
    width: 100vw;
    border-radius: 0;
  }
`;

export const HeaderSocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  
  div{
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img{
      cursor:pointer;
    }
  }
  
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  width: 114px;
  height: 100%;
  margin-left: 100px;
  margin-top: 25px;
  display: flex;
  align-items: end;
  justify-content: end;
  
  @media screen and (max-width: 990px) {
    width: 60px;
    height: 55px;
    align-items: end;
    justify-content: start;
    margin-left: 20px;
    margin-top: 15px;
  }
`;

export const Logo = styled.img`
  width: 90%;
  height: 90%;
`;

export const HeaderLinks = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  height: 100%;
  width: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  
  p{
    font-family: var(--font-family);
    font-size: 20px;
  }
  
  &:hover{
    background-color: #E0F2FF;
    color: black;
  }
`;

export const HeaderChevronContainer = styled.div`
  display: none;
  position: absolute;
  right: 18px;
  top: 45px;
  
  @media screen and (max-width: 990px) {
    display: block;
  }
`;

export const HiddenMenuShadow = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.53);
  z-index: 3;
  
  .slide-left {
      -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  @-webkit-keyframes slide-left {
      0% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
      100% {
          -webkit-transform: translateX(-100px);
          transform: translateX(-100px);
      }
  }
  @keyframes slide-left {
      0% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
      100% {
          -webkit-transform: translateX(-100px);
          transform: translateX(-100px);
      }
  }
`;

export const HiddenMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 0 0 0;
  width: 80vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  right: 0;
  z-index: 2;
`;

export const HiddenMenuCloseButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  padding-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const HiddenMenuNavButton = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  height: 58px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const HiddenMenuPlatformsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  
  img{
    height: 25px;
    width: 25px;
    margin: 0 5px;
  }
`;

const slideLeft = css`
  .slide-left {
      -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  @-webkit-keyframes slide-left {
      0% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
      100% {
          -webkit-transform: translateX(-100px);
          transform: translateX(-100px);
      }
  }
  @keyframes slide-left {
      0% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
      100% {
          -webkit-transform: translateX(-100px);
          transform: translateX(-100px);
      }
  }
`;