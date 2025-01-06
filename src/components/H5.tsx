import React from "react";
import styled from "styled-components";
import { rem } from "polished";

interface IH5 {
  children: React.ReactNode;
  bgLight?: boolean;
}

const H5 = ({ children, bgLight = false }: IH5) => {
  return <H5Wrap bgLight={bgLight}>{children}</H5Wrap>;
};

export const H5Wrap = styled.h2<{ bgLight?: boolean }>`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 133%;
  color: ${(props) =>
    props.bgLight ? props.theme.colors.text.title : props.theme.colors.white};
`;

export default H5;
