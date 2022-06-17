import React from "react";

import {
  Container,
  Content,
  Header,
  BoxLogo,
  Navagation,
  MenuHamburguer,
  MenuMobile,
  ContainerApresentation,
  BoxApresentationPerfil,
  BoxImageProfire,
  Button,
} from "./styles";

//Images
import lineYellow from "../../assets/lineYellow.png";
import photoProfire from "../../assets/profire.png";
import Close from "../../assets/Close.svg";

import { useState } from "react";

export default function Home() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  return (
    <Container>
      <MenuMobile className={`${menuMobileOpen ? "isOpen" : ""}`}>
        {/* <div class="content"> */}
        <div className="content">
          <div className="content-header">
            <BoxLogo fullColor="#fff">
              <h2>Eronar</h2>
              <h2>Alves</h2>
            </BoxLogo>

            <img
              onClick={() => {
                setMenuMobileOpen(false);
              }}
              src={Close}
              alt="botao de fechar branco"
            />
          </div>
          <ul>
            <li className="active">Início</li>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Porfólio</li>
            <li>Contato</li>
          </ul>
        </div>
        <Button mx="auto" mt="36px">
          <a href="https://www.linkedin.com/in/eronaralves/" target="_blank">
            Me conheça melhor
          </a>
        </Button>
        {/* </div> */}
      </MenuMobile>
      {/* )} */}

      <Content>
        <Header>
          <BoxLogo>
            <h2>Eronar</h2>
            <h2>Alves</h2>
          </BoxLogo>
          <MenuHamburguer
            onClick={() => {
              setMenuMobileOpen(true);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </MenuHamburguer>
          <Navagation>
            <li>Início</li>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Porfólio</li>
            <li>Contato</li>
          </Navagation>
        </Header>
        <ContainerApresentation>
          <BoxApresentationPerfil>
            <h2>Bom dia. Boa tarde ou Boa noite!</h2>
            <h1>
              Olá, Eu sou o <strong>Eronar Alves</strong>
            </h1>
            <p>
              Desenvolvedor Front-end com foco em resolução de problemas,
              acessibilidade, escalabilidade e desempenho.
            </p>
            <Button mt="34px">
              <a
                href="https://www.linkedin.com/in/eronaralves/"
                target="_blank"
              >
                Me conheça melhor
              </a>
            </Button>
          </BoxApresentationPerfil>
          <BoxImageProfire>
            <img
              src={photoProfire}
              alt="Minha foto de frente com casaco azul com detalhes amarelo"
            />
          </BoxImageProfire>
        </ContainerApresentation>
      </Content>
      <img src={lineYellow} alt="linha amarelo" />
    </Container>
  );
}
