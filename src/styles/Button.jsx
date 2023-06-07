import styled, { css } from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.background || "transparent"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "1px solid blueviolet"};
  color: ${(props) => props.color || "blueviolet"};
  padding: ${(props) => props.padding || "7px 14px"};
  font-size: ${(props) => props.fontSize || "16px"};

  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth};

  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  /* justify-content: ; */

  &:hover {
    background: ${(props) => props.hoverBackground || "blueviolet"};
    color: ${(props) => props.hoverColor || "white"};
  }

  ${(props) =>
    props.$primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "blueviolet"};
      &:hover {
        color: ${(props) => props.hoverColor || "blueviolet"};
        background: ${(props) => props.hoverBackground || "white"};
      }
    `}
`;
