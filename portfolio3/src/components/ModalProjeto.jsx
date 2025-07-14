import { useState, useEffect } from "react";
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
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 90%;
  max-width: 900px;
  height: 90vh;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageSlider = styled.div`
  flex: 1;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoPanel = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;

  h5{
    font-size: 1rem;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
  background: none;
  border: none;
  color: #fff;
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

                    <SliderImage
                        src={projeto.images[currentIndex]}
                        alt={`Imagem ${currentIndex + 1}`}
                    />

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
                                <ImgPerfil src={Perfil} alt="" className="img-fluid" />
                            </div>
                            <div className="col-10">
                                <h5>@cesarreis___</h5>
                                <p>{projeto.description}</p>
                                
                            </div>
                        </div>
                    </div>


                </InfoPanel>
            </ModalContent>
        </Backdrop>
    );
}
