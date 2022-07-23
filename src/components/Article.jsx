import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H2Wrap } from './H2';
import { TextBodyWrap } from './TextBody';
import ReadMore from './ReadMore';
import BigNumber, { BigNumberWrap } from './BigNumber';

const Article = ({
  title = 'Protect Our Earth Against Climate Change',
  img = 'images/article-1.jpg',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}) => {
  return (
    <ArticleWrap>
      <ArticleInner>
        <ArticleContent>
          <ArticleTitle bgLight={true}>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
          <ReadMore />
        </ArticleContent>
        <ArticleBigNumber>01</ArticleBigNumber>
      </ArticleInner>
      <ArticleImg img={img} />
    </ArticleWrap>
  );
};

const ArticleWrap = styled.article`
  margin-bottom: ${rem(160)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const ArticleTitle = styled(H2Wrap)`
  margin-bottom: ${rem(24)};
`;
const ArticleDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body};
  margin-bottom: ${rem(40)};
`;

const ArticleInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(123)};
  margin-bottom: ${rem(40)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
    gap: ${rem(40)};
  }
`;
const ArticleContent = styled.div``;

const ArticleBigNumber = styled(BigNumberWrap)`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    order: -1;
    margin-top: 0;
  }
`;

const ArticleImg = styled.div`
  width: 100%;
  height: ${rem(400)};
  overflow: hidden;
  background: url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
  /* aspect-ratio: 1232 / 400; */
`;

export default Article;
