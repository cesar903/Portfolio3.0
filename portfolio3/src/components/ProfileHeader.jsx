import React, {useState} from 'react';
import StoryModal from './StoryModal';
import Perfil from '../assets/perfil.jpg'
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    padding: 1rem;
  }
`;


const ProfileImgWrapper = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: linear-gradient(45deg,#f1f903, #fd1d1d, #833ab4); /* Roxo → Vermelho → Amarelo */
  padding: 4px;
  display: flex;
  align-items: center;


 
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 4px white;
`;


const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const User = styled.h2`
  font-size: 13px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;


const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Bio = styled.span`
  a{
    text-decoration: none;
  }
`;

const Desc = styled.span`
  color: gray;
  margin-top: 20px;

  strong{
    color: black;
  }

  span{
    margin-right: 8px;
  }
`;

const TextDiferente = styled.span`
    color: #888;
    font-size: 12px;
`


export default function ProfileHeader() {

  const [showStory, setShowStory] = useState(false);

  const handleStoryOpen = () => {
    setShowStory(true);
  };

  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='row  text-start align-items-center'>
            <div className="col-12 col-lg-4 col-md-12">
              <ProfileImgWrapper onClick={handleStoryOpen}>
                <ProfileImg src={Perfil} alt="Cesar Reis" />
              </ProfileImgWrapper>

            </div>
            <div className="col-12 col-md-8 mt-3 mt-md-0">
              <Info>
                <User>cesarreis__</User>
                <Desc >
                  <p>
                    <span><strong className='text-dark'>+15</strong> projetos</span>
                    <span><strong className='text-dark'>+20</strong> Clientes</span>
                    <span><strong className='text-dark'>3</strong> Empresas</span>
                  </p>
                </Desc>
                <Name><strong>Cesar Reis</strong></Name>
                <TextDiferente>Programador(a) React</TextDiferente>
                <Bio>
                  <a href="https://www.linkedin.com/in/cesar-reis-b07064187/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> Linkedin
                  </a>
                </Bio>
                <Bio>Codando e Correndo 🧠💻🏃‍♂️</Bio>
                <Bio>
                  <a href="https://github.com/cesar903" target="_blank" rel="noreferrer">
                    <FaGithub /> github.com/cesar903
                  </a>
                </Bio>
              </Info>
            </div>
          </div>
        </div>

      </Wrapper>
      {showStory && <StoryModal onClose={() => setShowStory(false)} />}
    </>

  );
}