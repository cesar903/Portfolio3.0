import { useState, useEffect } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Perfil from '../assets/perfil.jpg'
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Backdrop = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  padding: 1rem;

  @media (max-width: 768px) {
    overflow-y: auto; /* scroll em mobile */
  }
`;


const ModalContent = styled.div`
  background: ${(props) => props.theme.background};
  width: 90%;
  max-width: 900px;
  height: 90vh;
  display: flex;
  border-radius: 1px;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  color: ${(props) => props.theme.color};

  @media (max-width: 768px) {
    flex-direction: column;
    height: 90vh; 
    overflow-y: auto;
  }
`;



const ImageSlider = styled.div`
  flex: 1;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;


const SliderImage = styled.img`
  width: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    height: auto;
    max-height: 50vh;
  }
`;


const InfoPanel = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  border-top: solid ${(props) => props.theme.background} 15px;
  border-bottom: solid ${(props) => props.theme.background} 15px;

  @media (max-width: 768px) {
    overflow-y: visible; 
  }
`;


const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  color: white; 
  z-index: 1101; 
  cursor: pointer;

  @media (max-width: 768px) {
    color: white; 
    position: fixed; 
    right: 20px;
    top: 20px;
    z-index: 1002;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const ImgPerfil = styled.img`
  border-radius: 50%;
`

export default function ModalProjeto({ isOpen, onClose, projeto }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0); // Reseta ao abrir
  }, [isOpen]);

  if (!isOpen || !projeto) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < projeto.images.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <Backdrop onClick={onClose}>
      <CloseButton />
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageSlider>
          <PrevButton onClick={handlePrev} disabled={currentIndex === 0}>
            <FaCircleChevronLeft />
          </PrevButton>

          <Zoom>
            <SliderImage
              src={projeto.images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
            />
          </Zoom>

          <NextButton
            onClick={handleNext}
            disabled={currentIndex === projeto.images.length - 1}
          >
            <FaCircleChevronRight />
          </NextButton>
        </ImageSlider>

        <InfoPanel>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <ImgPerfil src={projeto.perfil} alt="" className="img-fluid" />
              </div>
              <div className="col-10">
                <h5>@{projeto.marcacao}</h5>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: projeto.description }}
                />

              </div>
            </div>
          </div>
        </InfoPanel>
      </ModalContent>
    </Backdrop>
  );
}
