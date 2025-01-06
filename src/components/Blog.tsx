import { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

import Title from "./Title";
import Container from "./Container";
import Button from "./Button";
import BlogArticle, { IBlogArticle } from "./BlogArticle";

const Blog = () => {
  const [blogArticles, setBlogArticles] = useState<IBlogArticle[]>([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setBlogArticles(json["blogArticles"]));
  }, []);

  return (
    <BlogWrap>
      <Container>
        <BlogHeader>
          <BlogTitle tag="h2">Our Latest Blog</BlogTitle>
          <Button>See All</Button>
        </BlogHeader>
        <BlogArticles>
          {blogArticles.map((props, index) => (
            <BlogArticle {...props} key={index} />
          ))}
        </BlogArticles>
      </Container>
    </BlogWrap>
  );
};

const BlogWrap = styled.section`
  padding: ${rem(160)} 0;
  background: linear-gradient(
    180deg,
    #e2eeec -5.54%,
    rgba(227, 239, 237, 0) 100%
  );
`;

const BlogHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${rem(40)};
  margin-bottom: ${rem(40)};
`;

const BlogTitle = styled(Title)``;

const BlogArticles = styled.div`
  display: grid;
  gap: ${rem(16)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(400)}, auto));
`;

export default Blog;
