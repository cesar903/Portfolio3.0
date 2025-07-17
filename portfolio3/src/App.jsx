import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./components/theme";

import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Highlights from "./components/Highlights";
import PostGrid from "./components/PostGrid";
import Knowledge from "./components/Knowledge";
import Marking from "./components/Marking";
import Menu from "./components/Menu";
import FloatingButton from "./components/FloatingButton";
import posts from "./data/posts";
import knowledges from "./data/knowledge";
import markings from "./data/marking";
import Footer from "./components/Footer";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
  }
`;

const Container = styled.div`
`;

const Main = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.background};
  margin-left: 80px;
  padding-left: 150px;
  padding-right: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 60px;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Container>
          <Sidebar />
          <Main>
            <ProfileHeader isDark={isDark} setIsDark={setIsDark}/>
            <Highlights />
            <Menu />
            <Routes>
              <Route path="/" element={<PostGrid posts={posts} />} />
              <Route path="/knowledge" element={<Knowledge knowledges={knowledges} />} />
              <Route path="/marking" element={<Marking markings={markings} />} />
            </Routes>
            <Footer/>
          </Main>
          <FloatingButton />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
