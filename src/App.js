import React from "react";
import He from "styled-components/dist/styled-components.browser.esm";
import Header from "./components/header/header.component";
import styled from 'styled-components';
import HeroSection from "./components/hero-section/hero-section.component";
import MySkills from "./components/my-skills/my-skills.component";

function App() {
  return (
    <AppContainer>
        <div className='full_page'>
            <Header/>
            <HeroSection/>
        </div>
        <div className='full_page'>
            <MySkills/>
        </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #E0F2FF;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  
  .full_page{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding:0;
    scroll-snap-align: start;
  }
`;

export default App;
