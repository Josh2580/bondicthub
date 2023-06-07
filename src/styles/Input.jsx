import styled, { css } from "styled-components";

export const Inputs = styled.input`
  background: transparent;
  border-radius: ${(props) => props.border || "5px"};
  border: ${(props) => props.border || "2px solid #cccccc"};
  text-align: ${(props) => props.textAlign || "left"};
  outline: ${(props) => props.outline || "none"};
  color: ${(props) => props.color || "#777777"};

  width: ${(props) => props.width || "fit-content"};
  padding: ${(props) => props.padding || "7px 14px"};
`;

export const TextArea = styled.textarea`
  background: transparent;
  border-radius: ${(props) => props.border || "5px"};
  border: ${(props) => props.border || "2px solid #cccccc"};
  text-align: ${(props) => props.textAlign || "left"};
  outline: ${(props) => props.outline || "none"};
  color: ${(props) => props.color || "#777777"};

  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  max-height: ${(props) => props.maxHeight};

  padding: ${(props) => props.padding || "7px 14px"};
`;
