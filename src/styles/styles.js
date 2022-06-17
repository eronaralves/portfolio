import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  
  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    z-index: 0;
  }

  .buttonConhecame {
    font-size: 14px;
    font-weight: 700;
    line-height: 15px;
    border-radius: 30px;
    background-color: #EB9D0C;
    padding: 16px 32px;
    margin-top: 34px;
    border: none;
    color: #fff;
  }

  .logo {
    font-size: 72px;
    font-weight: 800;
    line-height: 80px;
    margin-top: 4px;

    strong {
      color: #EB9D0C
    }
  }
  
`

export const Content = styled.div`
  width: 90%;
  max-width: 1120px;
  height: 100%;
  margin: auto;
`

export const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const BoxLogo = styled.div`
  display: flex;
   & >  h2:nth-child(2) {
    color: #EB9D0C;
   }
`

export const Navagation = styled.ul`
  display: flex;
  gap: 16px;

  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color:#EB9D0C;
  }

  @media(max-width: 610px) {
    display: none;
  }
`

export  const MenuHamburguer = styled.div`
  display: none;
  cursor: poiter;
  div {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 5px;
  }

  @media(max-width: 610px) {
    display: block;
  }
`
export const MenuMobile = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  
  & > div {
    height: 100%;
    width: 45%;

    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background: #B24139;
    
    li {
      text-align: center;
      margin-bottom: 48px;
    }

    & > div:nth-child(1) {
      width: 90%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      margin-bottom: 60px;

      div {
        display: flex;
        & >  h2:nth-child(2) {
          color: #EB9D0C;
        }
      }
    }
  }
`

export const ContainerApresentation = styled.div`
  height: calc(100% - 72px);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 10px;

  @media(max-width: 970px) {
    flex-wrap: wrap;
  }
  
`

export const BoxApresentationPerfil = styled.div`
  width: 100%;
  max-width: 500px;

  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #EB9D0C;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    opacity: .7;
    margin-top: 16px
  }

  h1 {
    font-size: 72px;
    font-weight: 800;
    margin-top: 4px;
    display: flex;
    flex-direction: column;

    strong {
      color: #EB9D0C
    }
  }
  
  @media(max-width: 520px) {
    h1 {
      font-size: 60px;
    }

    strong {
      font-size: 65px;
    }
  }

  @media(max-width: 430px) {
    h1 {
      font-size: 30px;
    }

    strong {
      font-size: 42px;
      line-height: 140%;
    }
  }

`

export const BoxImageProfire = styled.div`
  width: 100%;
  margin-top: 30px;

  img {
    width: 100%;
  }


  @media(min-width: 970px) {
    width: auto;
    position: absolute;
    margin-top: 0px;
    right: -200px;
    bottom: 0;

    img {
      width: auto;
      height: 90vh;
    }
  }
`