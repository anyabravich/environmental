import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoWrap to={'/'}>
      <LogoImg src={'/images/logo.svg'} alt="logo" />
    </LogoWrap>
  );
};

const LogoWrap = styled(Link)`
  display: flex;
  width: ${rem(136)};
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
