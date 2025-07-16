import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Perfil from "../assets/perfil.jpg"

import PointParanoa1 from "../assets/imgPointParanoa/PointParanoa1.png"
import PointParanoa2 from "../assets/imgPointParanoa/PointParanoa2.png"
import PointParanoa3 from "../assets/imgPointParanoa/PointParanoa3.png"
import PointParanoa4 from "../assets/imgPointParanoa/PointParanoa4.png"
import PointParanoa5 from "../assets/imgPointParanoa/PointParanoa5.png"
import PointParanoa6 from "../assets/imgPointParanoa/PointParanoa6.png"
import PointParanoa7 from "../assets/imgPointParanoa/PointParanoa7.png"
import PointParanoa8 from "../assets/imgPointParanoa/PointParanoa8.png"
import PointParanoa9 from "../assets/imgPointParanoa/PointParanoa9.png"
import PointParanoa10 from "../assets/imgPointParanoa/PointParanoa10.png"
import PointParanoa11 from "../assets/imgPointParanoa/PointParanoa11.png"
import PointParanoa12 from "../assets/imgPointParanoa/PointParanoa12.png"

import PetPer1 from "../assets/imgPetPer/PetPer1.png"
import PetPer2 from "../assets/imgPetPer/PetPer2.png"
import PetPer3 from "../assets/imgPetPer/PetPer3.png"
import PetPer4 from "../assets/imgPetPer/PetPer4.png"
import PetPer5 from "../assets/imgPetPer/PetPer5.png"
import PetPer6 from "../assets/imgPetPer/PetPer6.png"
import PetPer7 from "../assets/imgPetPer/PetPer7.png"
import PetPer8 from "../assets/imgPetPer/PetPer8.png"

export default [
  {
    images: [PointParanoa1, PointParanoa12, PointParanoa2, PointParanoa3, PointParanoa4, PointParanoa5, PointParanoa6,
      PointParanoa7, PointParanoa8, PointParanoa9, PointParanoa10, PointParanoa11,
    ],
    perfil: Perfil,
    marcacao: "Cesar Reis",
    description: `<strong>📌Sistema de Registro de Ponto Digital – Indústria Paranoá </strong>
    Acesse o projeto em: <a href="https://pointparanoa.netlify.app/" target="_blank" rel="noopener noreferrer">PointParanoa</a>

    Desenvolvi e implementei um sistema digital de registro de ponto personalizado para a Indústria Paranoá, com o objetivo de otimizar o controle de presença de colaboradores, reduzir erros operacionais e fornecer dados precisos para o setor de RH.

    Tecnologias Utilizadas:
    Frontend: React.js (com Vite), Bootstrap, Styled-components
    Backend: Node.js com Express.js
    Banco de Dados: MongoDB Atlas
    Autenticação: JWT, Bcrypt
    Hospedagem: Netlify (Frontend) e Render/Heroku (Backend)

    <strong>Funcionalidades:</strong>
    Login com autenticação segura para alunos e professores
    Registro de ponto por parte dos colaboradores
    Status do ponto com três cores:
    VERMELHO - Não aprovado
    AMARELO - Aguardando aprovação
    VERDE - Aprovado

    Justificativa de faltas com possibilidade de anexar atestados
    Tela de calendário com dias letivos/úteis visíveis
    Painel administrativo para gerentes/professores aprovarem ou recusarem pontos
    Geração de relatórios e gráficos comparativos de presença

    <strong>Resultados:</strong> 
    Melhoria significativa no acompanhamento da frequência dos colaboradores
    Facilidade para o setor de RH gerenciar justificativas e aprovações
    Redução do uso de papel e maior agilidade no processo de controle de ponto`,
  },

  {
    images: [PetPer1, PetPer2, PetPer3, PetPer4, PetPer5, PetPer6, PetPer7, PetPer8],
    perfil: Perfil,
    marcacao: "Cesar Reis",
    description: `<strong>📌 Projeto: PetPer – Sistema de Gestão para Casa de Rações</strong><br/><br/>
    Acesse o projeto em: <a href="https://petper.netlify.app/" target="_blank" rel="noopener noreferrer">PetPer - Loja de Ração</a>
    Desenvolvi uma aplicação frontend para a <strong>PetPer – Casa de Rações</strong>, com o objetivo de facilitar o controle de estoque e a exibição dos produtos à venda. O sistema foi construído com foco na usabilidade e no suporte ao atendimento via WhatsApp, permitindo que o cliente finalizasse pedidos diretamente pelo aplicativo de mensagens.

    <strong>Tecnologias Utilizadas:</strong><br/>
    Frontend: React.js (com Vite)<br/>
    Estilização: Bootstrap e Styled-components<br/>
    Integração externa: Link gerado para WhatsApp via API<br/>
    <strong>Funcionalidades:</strong><br/>
    • Listagem dinâmica de produtos e categorias<br/>
    • Sistema de carrinho de compras simulado<br/>
    • Botão de finalizar pedido que redireciona para o WhatsApp com os itens da compra<br/>
    • Controle visual de estoque e disponibilidade<br/>
    • Layout responsivo para dispositivos móveis<br/>
    <strong>Benefícios:</strong><br/>
    • Facilita o controle interno da loja sem necessidade de back-end<br/>
    • Automatiza o atendimento via WhatsApp, agilizando o processo de venda<br/>
    • Interface limpa e responsiva, projetada para uso em tablets e celulares da loja
    `,
  },
  {
    images: [Project2, Project1],
    description: "Dashboard com gráficos interativos em Chart.js.",
  },
  // ...outros projetos
];
