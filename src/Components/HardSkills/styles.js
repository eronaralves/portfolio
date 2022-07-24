import styled from "styled-components";

export const BoxIcons = styled.div`
  text-align: center;

  svg {
    font-size: 70px;
    color: #fff;
    &:hover {
      color: ${({ color }) => color};
    }
  }

  h3 {
    margin-top: 13px;
    text-align: center;
  }

  @media(max-width: 1000px) {
    width: 100%;
    max-width: 120px;
  }
`;