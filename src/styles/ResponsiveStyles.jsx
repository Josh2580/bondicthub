import styled from "styled-components";

const ResponsiveStyle = styled.div`
  width: 96%;
  max-width: 1150px;
  margin: 0rem auto;

  @media (max-width: 1400px) {
    width: 96%;
    max-width: 1100px;
  }
  @media (max-width: 1158px) {
    width: 96%;

    max-width: 858px;
  }

  @media (max-width: 916px) {
    width: 96%;

    max-width: 700px;
  }
  @media (max-width: 769px) {
    /* display: block; */
    width: 85%;
    max-width: 650px;
  }
  @media (max-width: 550px) {
    /* display: block; */
    width: 92%;
    /* max-width: 400px; */
  }
`;

export default ResponsiveStyle;
