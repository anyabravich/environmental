import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

const Logo = ({ img = 'logo' }) => {
  return <LogoWrap to={'/'} img={img}></LogoWrap>;
};

export const LogoWrap = styled(Link)`
  display: flex;
  width: ${rem(136)};
  height: ${rem(56)};
  background: url(${(props) => `images/${props.img}.svg`}) no-repeat center center;
  background-size: cover;
`;

export default Logo;
