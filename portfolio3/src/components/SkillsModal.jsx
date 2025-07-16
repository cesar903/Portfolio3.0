import React, { useEffect, useState, useRef } from "react";
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
  max-width: 380px;
  background: ${(props) => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  position: relative;

  @media (max-width: 768px) {
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

const SkillLabel = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.color};
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

const CloseButton = styled(IoMdClose)`
  color: white;
  font-size: 26px;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    color: #ff4444;
  }
`;

const SkillImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  max-height: 350px;
  background: #222;
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
  }, [paused, onClose, skill]); // reset timer se trocar skill

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
        <Header>
          <SkillLabel>{skill.label}</SkillLabel>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={togglePause}>
              {paused ? <FaPlay /> : <IoIosPause />}
            </IconButton>
            <CloseButton onClick={onClose} title="Fechar" />
          </div>
        </Header>
        <SkillImage src={skill.modalImage || skill.image} alt={skill.label} />
      </ModalBox>
    </Overlay>
  );
}
