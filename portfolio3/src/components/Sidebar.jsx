import styled from "styled-components";
import Logo from "../assets/logo.png"
import { GrHomeRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";

const SidebarContainer = styled.div`
  height: 100vh;
  background: white;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 100%;
    border-right: none;
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: 0;
    left: 0;
    top: auto; 
    padding: 0 10px;
    background: white;
  }
`;

const LogoWrapper = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;

  img{
    width: 100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  margin: 15px 0;
  font-size: 20px;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: row;

  span {
    margin-left: 10px;
    font-size: 15px;
  }

  &:hover {
    color: #888;
  }

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;

    span {
      display: none;
    }
  }
`;



export default function Sidebar() {
  return (
    <SidebarContainer>
      <LogoWrapper>
        <img src={Logo} alt="logo" className="mb-4" />
      </LogoWrapper>

      <ButtonsWrapper>
        <SidebarButton>
          <GrHomeRounded />
          <span>Mensagem</span>
        </SidebarButton>
        <SidebarButton>
          <IoIosSearch />
          <span>Sobre</span>
        </SidebarButton>
        <SidebarButton>
          <FaRegMessage />
          <span>Conversar</span>
        </SidebarButton>
      </ButtonsWrapper>
    </SidebarContainer>
  );
}

