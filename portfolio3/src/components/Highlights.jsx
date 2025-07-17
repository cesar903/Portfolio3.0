import { useState } from "react";
import styled from "styled-components";
import SkillsModal from "./SkillsModal";
import LogoReact from "../assets/iconeReact.png";
import Html from "../assets/HtmlCssJs.webp";
import Bootstrap from "../assets/bootstrap.webp";
import LogoMysql from "../assets/logoMysql.png";
import Python from "../assets/python.png";
import MongoDb from "../assets/mongoDb.png";
import Mais from "../assets/iconeMais.jpg"
import Skills from "../assets/skills.jpg"
import StoryReact from "../assets/StoryReact.png"
import StoryHtml from "../assets/StoryHtml.png"
import StoryBootstrap from "../assets/StoryBootstrap.png"
import StoryMysql from "../assets/StoryMysql.png"
import StoryPython from "../assets/StoryPython.png"
import StoryMongoDb from "../assets/StoryMongoDb.png"
import StoryWahtsapp from "../assets/StoryWhatsapp.webp"

const HighlightsWrapper = styled.div`
  overflow-x: auto;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.background};
  scrollbar-width: none;
  color: ${(props) => props.theme.color};
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const HighlightsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Highlight = styled.div`
  text-align: center;
  min-width: 80px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 0.5rem;
  border: 2px solid #ccc;
  padding: 2px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export default function Highlights() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const highlights = [
    { image: LogoReact, modalImage: StoryReact, label: "ReactJS ❤️", description: "Biblioteca para interfaces modernas e declarativas.", percent: "80%" },
    { image: Html, modalImage: StoryHtml, label: "Html,Css e JS 🚀", description: "Tríade fundamental para web.", percent: "5%" },
    { image: Bootstrap, modalImage: StoryBootstrap, label: "Bootstrap 📌", description: "Framework de componentes responsivos.", percent: "80%" },
    { image: LogoMysql, modalImage: StoryMysql, label: "MySql 🐬", description: "Banco de dados relacional rápido e confiável.", percent: "80%" },
    { image: Python, modalImage: StoryPython, label: "Python 🐍", description: "Linguagem poderosa e versátil.",percent: "80%" },
    { image: MongoDb, modalImage: StoryMongoDb, label: "MongoDB 😜", description: "Banco de dados NoSQL orientado a documentos.", percent: "80%" },
  ];

  return (
    <>
      <HighlightsWrapper>
        <HighlightsContainer>
          {highlights.map((item, idx) => (
            <Highlight key={idx} onClick={() => setSelectedSkill(item)}>
              <Circle>
                <Image src={item.image} alt={`highlight-${idx}`} />
              </Circle>
              <small>{item.label}</small>
            </Highlight>
          ))}
        </HighlightsContainer>
      </HighlightsWrapper>

      <SkillsModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
}
