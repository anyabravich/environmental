import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Article from './Article';
import Container from './Container';

const Articles = () => {
  return (
    <ArticlesWrap>
      <Container>
        <Article />
      </Container>
    </ArticlesWrap>
  );
};

const ArticlesWrap = styled.section``;

export default Articles;
