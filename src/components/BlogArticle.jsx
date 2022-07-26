import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H6Wrap } from './H6';
import { H5Wrap } from './H5';
import { TextBodyWrap } from './TextBody';

const BlogArticle = ({
  img = 'blog-1',
  title = 'The EU needs to hold the financial sector in global deforestation',
  location = 'Forest, Crisis',
  description = 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.',
}) => {
  return (
    <BlogArticleWrap>
      <BlogArticleImg img={img} />
      <BlogArticleLocation>{location}</BlogArticleLocation>
      <BlogArticleTitle bgLight={true}>{title}</BlogArticleTitle>
      <BlogArticleDescription>{description}</BlogArticleDescription>
    </BlogArticleWrap>
  );
};

const BlogArticleWrap = styled.article`
  padding: ${rem(16)};
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${rem(16)};
`;

const BlogArticleImg = styled.div`
  width: 100%;
  aspect-ratio: 368 / 240;
  border-radius: ${rem(8)};
  background: url(${(props) => `images/${props.img}.jpg`}) no-repeat center center;
  background-size: cover;
  margin-bottom: ${rem(16)};
`;

const BlogArticleTitle = styled(H5Wrap)`
  margin-bottom: ${rem(16)};
`;

const BlogArticleLocation = styled(H6Wrap)`
  margin-bottom: ${rem(16)};
`;

const BlogArticleDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.text};
`;

export default BlogArticle;
