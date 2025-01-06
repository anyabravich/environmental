import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Article from './Article';
import Container from './Container';

const Articles = () => {
  const [articlesPosts, setArticlesPosts] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setArticlesPosts(json['articlesPosts']));
  }, []);

  return (
    <ArticlesWrap>
      <Container>
        {articlesPosts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </Container>
    </ArticlesWrap>
  );
};

const ArticlesWrap = styled.section`
  padding-bottom: ${rem(160)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-bottom: ${rem(160 / 2)};
  }
`;

export default Articles;
