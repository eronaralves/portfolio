import styled from "styled-components";

export const BoxSoftSkills = styled.div`
  width: 100%;
  max-width: 120px;
  text-align: center;
  img {
    width: 80px;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }

  h3 {
    margin-top: 13px;
  }
`