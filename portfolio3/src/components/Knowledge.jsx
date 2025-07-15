import React from "react";
import Perfil from "../assets/perfil.jpg";
import styled from "styled-components";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsSend } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import { BiSolidMessageRounded } from "react-icons/bi";

const FeedContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 400px;
  max-width: 90%;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 0rem;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgPerfil = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  display: block;
  object-fit: cover;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.8rem 0rem;
`;

const HeartIcon = styled(IoIosHeartEmpty)`
  font-size: 22px;
  cursor: pointer;
`;

const MessageIcon = styled(LuMessageCircle)`
  font-size: 22px;
  cursor: pointer;
  transform: scaleX(-1);
`;

const SendIcon = styled(BsSend)`
  font-size: 22px;
  cursor: pointer;
`;

const Description = styled.p`
  padding: 0 0rem 1rem;
  margin: 0;
  font-size: 15px;
`;

const Date = styled.p`
  color: #888;
  font-size: 12px;
  font-style: italic;
`

export default function Knowledge({ knowledges }) {
  return (
    <FeedContainer>
      {knowledges.map((item, idx) => (
        <Card key={idx}>
          <Header>
            <ImgPerfil src={Perfil} alt="Perfil" />
            <div>
              <Username>cesarreis__</Username>
              <Date>{item.data}</Date>
            </div>

          </Header>

          <Img src={item.image} alt={`Conhecimento ${idx}`} />

          <Actions>
            <HeartIcon />
            <MessageIcon />
            <SendIcon />
          </Actions>

          <Description>
            <strong> cesarreis__ </strong> {item.description || "Legenda do post ou conhecimento aqui."}
          </Description>
        </Card>
      ))}
    </FeedContainer>
  );
}
