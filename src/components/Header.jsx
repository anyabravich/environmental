import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from 'src/components/Container';

const Header = () => {
  return (
    <HeaderBox>
      <Container>Header</Container>
    </HeaderBox>
  );
};

const HeaderBox = styled.div``;

export default Header;
