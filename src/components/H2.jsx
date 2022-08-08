import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H2 = ({ children, bgLight = false }) => {
  return <H2Wrap bgLight={bgLight}>{children}</H2Wrap>;
};

export const H2Wrap = styled.h2`
  font-weight: 700;
  font-size: ${rem(64)};
  line-height: 138%;
  color: ${(props) => (props.bgLight ? props.theme.colors.text.title : props.theme.colors.white)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${rem(54)};
  }
`;

export default H2;
