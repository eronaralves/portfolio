import React, { useEffect, useState } from "react";




// Styles
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
  ContainerSoftSkills,
  ContainerProjects,
  BoxProjets
} from "./styles";

// Ultis
import {Projets, HardsSkill ,SoftSkill} from "../../Ultis"

//Components
import SoftSkills  from "../../Components/SoftSkills";
import CardsProjects  from "../../Components/CardsProjects";
import HardsSkills from "../../Components/HardSkills";

// Images
import photoProfire from "../../assets/profire.png";
import Close from "../../assets/Close.svg";


export default function Home(props) {
  const [menuMobileOpen, setMenuMobileOpen] = useState(
  false);
  const [mensagewelcome, setMensagewelcome] = useState()
  const [projects, setProjects] = useState(Projets)
  const [softSkill, setSoftSkill] = useState(SoftSkill)
  const [hardSkill, setHardSkill] = useState(HardsSkill)
  

  useEffect(() => {
    const currentData = new Date()
    const hours = currentData.getHours()

    if(hours <= 11 && hours >= 4) {
      setMensagewelcome('Bom dia')
    } else if(hours >= 12 && hours < 18) {
      setMensagewelcome('Boa Tarde')
    } else if(hours >= 1 && hours < 4) {
      setMensagewelcome('Voce deve estar cansado, dorme um pouco')
    } else {
      setMensagewelcome('Boa Noite')
    }

  }, [])

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
        </MenuMobile>


        <Content>
          <Header id="#inicio">
            <BoxLogo>
              <h2>Eronar</h2>
              <h2>Alves</h2>
            </BoxLogo>

            <MenuHamburguer onClick={() => {setMenuMobileOpen(true);}}>
              <div></div>
              <div></div>
              <div></div>
            </MenuHamburguer>

            <Navagation>
              <a href="#inicio"><li>Início</li></a>
              <a href=""><li>Sobre</li></a>
              <a href="#hard-skill"><li>Habilidades</li></a>
              <a href="#projects"><li>Porfólio</li></a>
              <a href=""><li>Contato</li></a>
            </Navagation>

          </Header>

          <ContainerApresentation>
            <BoxApresentationPerfil>
              <h2>{mensagewelcome}</h2>
              <h1>
                Olá, Eu sou o <strong>Eronar Alves</strong>
              </h1>
              <p>
                Desenvolvedor Front-end com foco em resolução de problemas,
                acessibilidade, escalabilidade e desempenho.
              </p>

              <Button mt="34px">
                <a href="https://www.linkedin.com/in/eronaralves/" target="_blank">Me conheça melhor </a>
              </Button>
            </BoxApresentationPerfil>

            <BoxImageProfire>
              <img src={photoProfire} alt="Minha foto de frente com casaco azul com detalhes amarelo"/>
            </BoxImageProfire>

          </ContainerApresentation>

          <ContainertMySkills id="hard-skill">
            <h2 className="title-section">Habilidades/Recursos</h2>
            <p>
              Estou em constante aprendizado, buscando aprimorar meus
              conhecimento.
            </p>

            <ContentMySkills>
              {hardSkill.map(item => (
                <>
                  <HardsSkills item={item}/>
                </>
              ))}
            </ContentMySkills>

          </ContainertMySkills>

          <ContainerSoftSkills id="#soft-skill">
            <h2 className="title-section">Soft Skills</h2>
            <ContentMySkills>
              {softSkill.map(item => (
                <>
                  <SoftSkills img={item.img} label={item.label}/>
                </>
              ))}
            </ContentMySkills>
          
          </ContainerSoftSkills>

          <ContainerProjects id="projects"> 
            <h2 className="title-section">Projetos</h2>

            <BoxProjets>
              {projects.map(item => (
                <CardsProjects img={item.img} label={item.label} href={item.href}/>
              ))}
            </BoxProjets>

          </ContainerProjects>
        </Content>
      </Container>
    </>
  );
}
