import styled from "styled-components";
import { TbBrandMessenger } from "react-icons/tb";
import Perfil from "../assets/perfil.webp"

const FloatingWrapper = styled.a`
  text-decoration: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 40px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: #333;
    color: white;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    padding: 8px 12px;
    margin-bottom: 55px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  font-size: 22px;
`;



const Text = styled.span`
  font-weight: bold;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Badge = styled.span`
  position: absolute;
  top: 2px;
  right: -4px;
  background-color: red;
  color: white;
  font-size: 10px;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
  z-index: 1;
  font-weight: bold;
`;


export default function FloatingButton() {

  return (
    <FloatingWrapper
      href={`https://api.whatsapp.com/send/?phone=5511982192778&text&type=phone_number&app_absent=0`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWrapper>
        <Badge>3</Badge>
        <TbBrandMessenger />
      </IconWrapper>
      <Text>Mensagens</Text>
      <Avatar
        src={Perfil}
        alt="Perfil"
        loading="lazy"
      />
    </FloatingWrapper>
  );
}
