import React from "react";
import styled from "styled-components";

const H1 = ({ children, weight = 700 }) => {
  return <H1Wrap weight={weight}>{children}</H1Wrap>;
};

const H1Wrap = styled.h1`
  font-weight: ${(props) => props.weight};
`;

export default H1;
