import styled from "styled-components";

export const ImageCard = styled.img`
  position: ${(props) => props.position};

  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};

  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};

  border-radius: ${(props) => props.borderRadius};
  object-fit: ${(props) => props.objectFit};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  background: ${(props) => props.background};
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
`;
