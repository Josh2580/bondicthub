import styled, { css } from "styled-components";

export const Select = styled.select`
  background: transparent;
  border-radius: ${(props) => props.border || "5px"};
  border: ${(props) => props.border || "1px solid #cccccc"};
  outline: none;
  color: ${(props) => props.color || "#777777"};
  width: 150px;
  padding: ${(props) => props.padding || "7px 14px"};
`;
