import styled, { css } from "styled-components";

export const AllCard = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};

  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  background: ${(props) => props.background};
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color || "black"};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.$grid &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: ${(props) => props.gap};
      padding: ${(props) => props.padding};
      padding-top: ${(props) => props.paddingTop};
      padding-right: ${(props) => props.paddingRight};
      padding-bottom: ${(props) => props.paddingBottom};
      padding-left: ${(props) => props.paddingLeft};
      background: ${(props) => props.background};
      justify-content: ${(props) => props.justifyContent};
      color: ${(props) => props.color || "black"};
      align-items: ${(props) => props.alignItems};
      margin: ${(props) => props.margin};
      margin-top: ${(props) => props.marginTop};
      margin-right: ${(props) => props.marginRight};
      margin-bottom: ${(props) => props.marginBottom};
      margin-left: ${(props) => props.marginLeft};
      width: ${(props) => props.width};
      height: ${(props) => props.height};
    `}/* @media (max-width: 1158px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 916px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width: 669px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 569px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;
