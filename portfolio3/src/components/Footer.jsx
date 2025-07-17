import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.background};
  padding: 2rem 0;
  border-top: 1px solid #dbdbdb;
  margin-top: 5rem;
  font-size: 0.875rem;
  color: #8e8e8e;

   @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a, span {
    color: #8e8e8e;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CopyRight = styled.div`
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <LinkGroup>
        <Link to="/knowledge">Sobre Mim</Link>
        <Link to="/">Projetos</Link>
        <Link to="/marking">Menções</Link>
        <a href="https://github.com/cesar903" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/cesar-reis-b07064187/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`https://api.whatsapp.com/send/?phone=5511982192778&text&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer">Contato</a>
      </LinkGroup>
      <CopyRight>
        © {new Date().getFullYear()} Cesar Reis. Todos os direitos reservados.
      </CopyRight>
    </FooterWrapper>
  );
}
