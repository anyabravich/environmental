import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';
import Button from './Button';

const Latests = () => {
  return (
    <LatestsWrap>
      <Container>
        <LatestsInner>
          <LatestsTop>
            <LatestsTitle bgLight={true}>Our Latest Project</LatestsTitle>
            <Button>See All</Button>
          </LatestsTop>
        </LatestsInner>
        <LatestsItems>
          <LatestsItemBig />
          <LatestsItemSmallOne />
          <LatestsItemSmallTwo />
          <LatestsItemSmallThree />
        </LatestsItems>
      </Container>
    </LatestsWrap>
  );
};

const LatestsWrap = styled.div``;
const LatestsInner = styled.div``;
const LatestsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(40)};
  margin-bottom: ${rem(40)};
`;

const LatestsTitle = styled(H2Wrap)``;

const LatestsItems = styled.div`
  display: grid;
  gap: ${rem(16)};
  grid-template-areas: 'LatestsItemBig LatestsItemSmallOne' 'LatestsItemBig LatestsItemSmallTwo' 'LatestsItemBig LatestsItemSmallThree';
  grid-template-columns: 66% 1fr;
  overflow: hidden;
  aspect-ratio: 1232 / 752;
`;

const latestItemBorderRadius = css`
  border-radius: ${(props) => rem(props.theme.radius.latest)};
`;

const LatestsItemBig = styled.div`
  grid-area: LatestsItemBig;
  background: green;
  ${latestItemBorderRadius};
`;

const LatestsItemSmallOne = styled.div`
  grid-area: LatestsItemSmallOne;
  background: red;
  ${latestItemBorderRadius};
`;

const LatestsItemSmallTwo = styled.div`
  grid-area: LatestsItemSmallTwo;
  background: pink;
  ${latestItemBorderRadius};
`;

const LatestsItemSmallThree = styled.div`
  grid-area: LatestsItemSmallThree;
  background: yellow;
  ${latestItemBorderRadius};
`;

export default Latests;
