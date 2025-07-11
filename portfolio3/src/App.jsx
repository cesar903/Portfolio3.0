import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import Highlights from "./components/Highlights";
import PostGrid from "./components/PostGrid";
import Knowledge from "./components/Knowledge";
import Marking from "./components/Marking";
import Menu from "./components/Menu";
import posts from "./data/posts";
import knowledges from "./data/knowledge";
import markings from "./data/marking";
import styled from "styled-components";

const Container = styled.div``;

const Main = styled.div`
  flex-grow: 1;
  background-color: #fff;
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
  return (
    <Router>
      <Container>
        <Sidebar />
        <Main>
          <ProfileHeader />
          <Highlights />
          <Menu />
          <Routes>
            <Route path="/" element={<PostGrid posts={posts} />} />
            <Route path="/knowledge" element={<Knowledge knowledges={knowledges}/> } />
            <Route path="/marking" element={<Marking markings={markings} />} />
          </Routes>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
