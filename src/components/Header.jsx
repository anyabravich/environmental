import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';

const Header = () => {
  return (
    <HeaderWrap>
      <Container>Header</Container>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  min-height: ${rem(800)}; // TODO: удалить
  background: ${(props) => props.theme.colors.secondary.rich.green};
  border-radius: 0 0 0 ${rem(80)};
`;

export default Header;
