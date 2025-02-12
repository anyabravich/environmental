import styled from "styled-components";
import { rem } from "polished";
import Title from "./Title";
import ReadMore from "./ReadMore";
import { TextBodyWrap } from "./TextBody";
import { BigNumberWrap } from "./BigNumber";

export interface IArticle {
  number: string;
  title: string;
  img: string;
  description: string;
}

const Article = ({
  number = "",
  title = "",
  img = "",
  description = "",
}: IArticle) => {
  return (
    <ArticleWrap>
      <ArticleInner>
        <ArticleContent>
          <ArticleTitle tag="h2">{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
          <ReadMore />
        </ArticleContent>
        <ArticleBigNumber>{number}</ArticleBigNumber>
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
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: ${rem(160 / 2)};
  }
`;

const ArticleTitle = styled(Title)`
  margin-bottom: ${rem(24)};
`;

const ArticleDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.default};
  margin-bottom: ${rem(40)};
`;

const ArticleInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(123)};
  margin-bottom: ${rem(40)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
    gap: ${rem(20)};
  }
`;

const ArticleContent = styled.div``;

const ArticleBigNumber = styled(BigNumberWrap)`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    order: -1;
    margin-top: 0;
  }
`;

const ArticleImg = styled.div<{ img: string }>`
  width: 100%;
  height: ${rem(400)};
  overflow: hidden;
  background: url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
  border-radius: ${(props) => rem(props.theme.radius.article)};
`;

export default Article;
