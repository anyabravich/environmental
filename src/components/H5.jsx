import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const H5 = ({ children, bgLight = false }) => {
  return <H5Wrap bgLight={bgLight}>{children}</H5Wrap>;
};

export const H5Wrap = styled.h2`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 133%;
  color: ${(props) =>
    props.bgLight ? props.theme.colors.text.title : props.theme.colors.text.white};
`;

export default H5;
