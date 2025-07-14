import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

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
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    max-width: none;
    max-height: none;
    border-radius: 0;
    padding-top: 4rem;
  }
`;

const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 26px;
  color: #333;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #000;
  }
`;

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const SkillLabel = styled.h3`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
  margin-bottom: 2rem;
`;

const ChartPlaceholder = styled.div`
  height: 220px;
  background-color: #f0f0f0;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background-color: #333;
  }
`;

export default function SkillsModal({ skill, onClose }) {
    if (!skill) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={onClose} />

                <SkillImage src={skill.image} alt={skill.label} />
                <SkillLabel>{skill.label}</SkillLabel>
                <Description>
                    {skill.description || "Tecnologia essencial para o desenvolvimento moderno!"}
                </Description>

                {/* Espaço para gráfico futuro */}
                <ChartPlaceholder>
                    Aqui será exibido um gráfico do seu conhecimento em {skill.label}.
                </ChartPlaceholder>

                <ActionButton onClick={onClose}>Fechar</ActionButton>
            </ModalContent>
        </Backdrop>
    );
}
