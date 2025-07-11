import styled from "styled-components";
import LogoReact from "../assets/iconeReact.png";
import Html from "../assets/HtmlCssJs.webp";
import Bootstrap from "../assets/bootstrap.webp";
import LogoMysql from "../assets/logoMysql.png";
import Python from "../assets/python.png";
import MongoDb from "../assets/mongoDb.png";

const HighlightsWrapper = styled.div`
  overflow-x: auto;
  padding: 1rem 2rem;
  background-color: #fff;

  scrollbar-width: none;

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
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 0.5rem;
  border: 2px solid #ccc;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Highlights() {
  const highlights = [
    { image: LogoReact, label: "React ❤️" },
    { image: Html, label: "Html,Css e JS 🚀" },
    { image: Bootstrap, label: "Bootstrap 📌" },
    { image: LogoMysql, label: "MySql 🐬" },
    { image: Python, label: "Python 🐍" },
    { image: MongoDb, label: "MongoDB 😜" },
  ];

  return (
    <HighlightsWrapper>
      <HighlightsContainer>
        {highlights.map((item, idx) => (
          <Highlight key={idx}>
            <Circle>
              <Image src={item.image} alt={`highlight-${idx}`} />
            </Circle>
            <small>{item.label}</small>
          </Highlight>
        ))}
      </HighlightsContainer>
    </HighlightsWrapper>
  );
}
