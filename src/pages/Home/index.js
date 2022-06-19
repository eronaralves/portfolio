import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStyledcomponents,
  SiGithub,
  SiChakraui,
  SiSass
} from "react-icons/si";
import { DiGit } from "react-icons/di"


//Styles
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
  ContainertMySkills,
  ContentMySkills,
  MySkill,
  ContainerSoftSkills
} from "./styles";

//Components
import MySkills from "../../Components/MySkills";

//Images
import lineYellow from "../../assets/lineYellow.png";
import photoProfire from "../../assets/profire.png";
import Close from "../../assets/Close.svg";

export default function Home(props) {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  return (
    <>
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
          <Button mx="auto" mt="36px" background="#fff" color="#eb9d0c">
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
          <ContainertMySkills>
            <h2 className="title-section">Habilidades/Recursos</h2>
            <p>
              Estou em constante aprendizado, buscando aprimorar meus
              conhecimento.
            </p>
            <ContentMySkills>
              <MySkill color="#DD4B25">
                <SiHtml5 fontSize="71px" />
                <h3>HTML5</h3>
              </MySkill>
              <MySkill color="#1A6FB4">
                <SiCss3 fontSize="71px" />
                <h3>Css3</h3>
              </MySkill>
              <MySkill color="#EFD81D">
                <SiJavascript fontSize="71px" />
                <h3>Java Script</h3>
              </MySkill>
              <MySkill color="#5ED3F3">
                <SiReact fontSize="71px" />
                <h3>React</h3>
              </MySkill>
              <MySkill color="#002D4A">
                <SiNextdotjs fontSize="71px" />
                <h3>Next</h3>
              </MySkill>
              <MySkill color="#D06EAA">
                <SiStyledcomponents fontSize="71px" />
                <h3>Styled Components</h3>
              </MySkill>
              <MySkill color="#2F74C0">
                <SiTypescript fontSize="71px" />
                <h3>Typescript</h3>
              </MySkill>
              <MySkill color="#E84D31">
                <DiGit fontSize="71px" />
                <h3>Git</h3>
              </MySkill>
              <MySkill color="#302E2F">
                <SiGithub fontSize="71px" />
                <h3>Github</h3>
              </MySkill>
              <MySkill color="#63C3C6">
                <SiChakraui fontSize="71px" />
                <h3>Chakra Ui</h3>
              </MySkill>
              <MySkill color="pink">
                <SiSass fontSize="71px" />
                <h3>Chakra Ui</h3>
              </MySkill>
            </ContentMySkills>
          </ContainertMySkills>
          <ContainerSoftSkills>
            <h2 className="title-section">Soft Skills</h2>
          </ContainerSoftSkills>
        </Content>
        {/* <img src={lineYellow} alt="linha amarelo" /> */}
      </Container>
    </>
  );
}
