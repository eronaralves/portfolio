import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100vw;
    z-index: 0;
  }

  .title-section {
    font-size: 45px;
    font-weight: 800;
    line-height: 46px;
    color: #eb9d0c;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1120px;
  height: 100%;
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BoxLogo = styled.div`
  display: flex;
  h2 {
    font-weight: 400;
  }

  & > h2:nth-child(2) {
    color: #eb9d0c;
    font-weight: 700;
  }
  ${({ fullColor }) =>
    fullColor &&
    css`
      color: ${fullColor} !important;
      & > h2:nth-child(2) {
        color: ${fullColor};
      }
    `}
`;

export const Navagation = styled.ul`
  display: flex;
  gap: 16px;

  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #eb9d0c;
  }

  @media (max-width: 610px) {
    display: none;
  }
`;

export const MenuHamburguer = styled.div`
  display: none;
  cursor: poiter;

  div {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 5px;
  }

  @media (max-width: 610px) {
    display: block;
  }
`;
export const MenuMobile = styled.div`
  width: 100%;
  height: 100vh;

  background: #eb9d0c;

  position: fixed;

  z-index: 2;

  visibility: hidden;
  right: -100%;
  transition: 0.4s linear all;

  &.isOpen {
    visibility: visible;
    right: 0%;
  }
  .content {
    padding: 0 20px;
    text-align: center;
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 72px;
    }

    ul {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      gap: 48px;

      li {
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        opacity: 0.6;
        &.active {
          opacity: 1;
        }
      }
    }
  }
`;

export const ContainerApresentation = styled.div`
  height: calc(100% - 72px);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 10px;

  @media (max-width: 970px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BoxApresentationPerfil = styled.div`
  width: 100%;
  max-width: 500px;

  h2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #eb9d0c;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    opacity: 0.7;
    margin-top: 16px;
  }

  h1 {
    font-size: 72px;
    font-weight: 800;
    margin-top: 4px;
    display: flex;
    flex-direction: column;

    strong {
      color: #eb9d0c;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 60px;
    }

    strong {
      font-size: 65px;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 30px;
    }

    strong {
      font-size: 42px;
      line-height: 140%;
    }
  }
`;

export const BoxImageProfire = styled.div`
  width: auto;
  position: absolute;
  margin-top: 0px;
  right: -200px;
  bottom: 0;

  img {
    width: auto;
    height: 90vh;
  }

  @media (max-width: 970px) {
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    right: 0px;

    margin-top: 30px;

    img {
      width: auto;
      height: 100%;
      position: absolute;
      bottom: 0;
    }
  }

  @media (max-width: 560px) {
    img {
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 15px;
  border-radius: 30px;
  padding: 16px 32px;

  border: none;

  display: block;

  background-color: ${({ background }) =>
    background ? background : "#eb9d0c"};

  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "#fff")};
  }
  margin-top: ${({ mt = "0px" }) => mt};
  margin-inline: ${({ mx = "0px" }) => mx};
`;

export const ContainertMySkills = styled.div`
  margin-top: 60px;
  p {
    width: 100%;
    max-width: 500px;

    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    opacity: 0.7;
    margin-bottom: 27px;
  }
`;

export const ContentMySkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;

export const MySkill = styled.div`
  text-align: center;

  svg {
    color: #fff;
    &:hover {
      color: ${({ color }) => color};
    }
  }
  h3 {
    margin-top: 13px;
  }
`;

export const ContainerSoftSkills = styled.div`
  margin-top: 40px;
`;
