import React from "react"


import { Container, Content, Header ,BoxLogo, Navagation, MenuHamburguer, MenuMobile,ContainerApresentation, BoxApresentationPerfil,BoxImageProfire } from "./styles/styles"

//Images
import lineYellow from "./assets/lineYellow.png"
import photoProfire from "./assets/profire.png"
import Close from "./assets/Close.svg"

import {createGlobalStyle} from "styled-components"
import { useState } from "react"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    background-color: #020409;
    color: #fff;
    font-family: "Epilogue";
  }
`

export default function App() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  return (
      <Container>
        {menuMobileOpen && (
            <MenuMobile onClick={() => {setMenuMobileOpen(false)}}>
              <div>
                <div>
                  <div>
                    <h2>Eronar</h2>
                    <h2>Alves</h2>
                  </div> 
                  <img onClick={() => {setMenuMobileOpen(false)}} src={Close} alt="botao de fechar branco"/>
                </div>
                <li>Início</li>
                <li>Sobre</li>
                <li>Habilidades</li>
                <li>Porfólio</li>
                <li>Contato</li>
                <button className="buttonConhecame">Me conheça melhor </button>
              </div>
            </MenuMobile>
          )}
        <GlobalStyle/>
        <Content>
          <Header>
            <BoxLogo>
              <h2>Eronar</h2>
              <h2>Alves</h2>
            </BoxLogo>
            <MenuHamburguer onClick={() => {setMenuMobileOpen(true)}}>
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
              <h1>Olá, Eu sou o <strong>Eronar Alves</strong></h1>
              <p>Desenvolvedor Front-end com foco em resolução de problemas, acessibilidade, escalabilidade e desempenho.</p>
              <button className="buttonConhecame">Me conheça melhor</button>
            </BoxApresentationPerfil>
            <BoxImageProfire>
              <img src={photoProfire} alt="Minha foto de frente com casaco azul com detalhes amarelo"/>
            </BoxImageProfire>
          </ContainerApresentation>
        </Content>
        <img src={lineYellow} alt="linha amarelo" />  
      </Container>
  )
}
