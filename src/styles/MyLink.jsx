import styled from "styled-components";
import Link from "react-router-dom";

export const MyLink = styled(Link)`
  color: ${(props) => props.color || "black"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  &:focus {
    color: ${(props) => props.focusColor};
  }
`;
