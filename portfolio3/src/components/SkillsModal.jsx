import React, { useEffect, useState, useRef } from "react";
import PerfilImg from "../assets/perfil.webp";
import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 400px;
  height: 500px;
  background: ${(props) => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vh;
    border-radius: 0;
  }
`;


const progress = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const ProgressBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "paused"
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: white;
  animation: ${progress} 5s linear forwards;
  animation-play-state: ${(props) => (props.paused ? "paused" : "running")};
  z-index: 1001;
  width: 100%;
  margin-top: 2px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 2px;
`;

const Header = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
  padding: 10px;
`;


const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;


const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: black;
`;



const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfilePic = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid white;
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CloseIcon = styled(IoMdClose)`
  font-size: 22px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #ff4d4d;
  }
`;


export default function SkillsModal({ skill, onClose }) {
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [paused, onClose, skill]); 

  if (!skill) return null;

  const togglePause = () => {
    setPaused((prev) => {
      if (!prev) clearTimeout(timeoutRef.current);
      return !prev;
    });
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ProgressBar paused={paused} />
        <Header><Header>
          <ProfileSection>
            <ProfilePic src={PerfilImg} alt="Cesar Reis" loading="lazy"/>
            <Username>cesarreis__</Username>
          </ProfileSection>

          <IconGroup>
            <IconButton onClick={togglePause} title="Pausar/Reproduzir">
              {paused ? <FaPlay /> : <IoIosPause />}
            </IconButton>
            <IconButton onClick={onClose} title="Fechar">
              <CloseIcon />
            </IconButton>
          </IconGroup>
        </Header>
        </Header>
        <SkillImage src={skill.modalImage || skill.image} alt={skill.label} loading="lazy" />


      </ModalBox>
    </Overlay>
  );
}
