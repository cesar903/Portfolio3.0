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
  padding: 1rem; /* Um pequeno padding para o modal não colar nas bordas */
`;

const ModalContent = styled.div`
  background: #fff;
  width: 90%;
  max-width: 900px;
  /* Em desktop, ainda queremos uma altura máxima para o modal não ficar gigante */
  max-height: 90vh; 
  display: flex;
  border-radius: 8px;
  overflow: hidden; /* Oculta a barra de rolagem por padrão (em desktop) */
  position: relative;
  flex-direction: row;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem; /* Margem reduzida para maximizar o espaço */
    width: calc(100% - 2rem); 
    overflow-y: auto;
    
    overflow-y: auto; /* Permite a rolagem quando o conteúdo exceder o max-height */
    -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
  }
`;

const ImageSlider = styled.div`
  flex: 1;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* Em mobile, não limite a altura do ImageSlider se você quer que a imagem seja grande */
`;

const SliderImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const InfoPanel = styled.div`
  flex: 1;
  padding: 1rem;
   min-height: 150px;
   overflow-y: auto;

   @media (max-width: 768px) {
    overflow-y: none;
   }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  color: white; 
  z-index: 1001; 
  cursor: pointer;

  @media (max-width: 768px) {
    color: #fff; /* Cor do botão para ser visível em mobile */
    position: fixed; /* Fixa o botão na viewport para que ele não role com o modal */
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
                                <ImgPerfil src={projeto.perfil} alt="" className="img-fluid" />
                            </div>
                            <div className="col-10">
                                <h5>@{projeto.marcacao}</h5>
                                <p style={{ whiteSpace: "pre-line" }}>{projeto.description}</p>
                                
                            </div>
                        </div>
                    </div>


                </InfoPanel>
            </ModalContent>
        </Backdrop>
    );
}
