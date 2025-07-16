import styled from "styled-components";
import { useTheme } from 'styled-components';
import Logo from "../assets/logo.png"
import LogoDark from "../assets/logoDark.png"
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { TbUserSquare } from "react-icons/tb";
import { TbBrandMessenger } from "react-icons/tb";

const SidebarContainer = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background};
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
    background: ${(props) => props.theme.background};
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
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  font-size: medium;
  padding-left: 10px;
  font-weight: 800;

  span{
    margin-left: 15px;
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
  const theme = useTheme();
  return (
    <SidebarContainer>
      <LogoWrapper>
        <img src={theme.title === 'dark' ? LogoDark : Logo} alt="logo" className="mb-4" />
      </LogoWrapper>

      <ButtonsWrapper>
        <SidebarButton as={NavLink} to="/">
          <GrHomeRounded />
          <span>Projetos</span>
        </SidebarButton>

        <SidebarButton as={NavLink} to="/knowledge">
          <IoIosSearch />
          <span>Sobre</span>
        </SidebarButton>

        <SidebarButton as={NavLink} to="/marking">
          <TbUserSquare />
          <span>Menções</span>
        </SidebarButton>

        <SidebarButton as={NavLink} target="_blank" to={`https://api.whatsapp.com/send/?phone=5511982192778&text&type=phone_number&app_absent=0`}>
          <TbBrandMessenger />
          <span>Conversar</span>
        </SidebarButton>
      </ButtonsWrapper>

    </SidebarContainer>
  );
}

