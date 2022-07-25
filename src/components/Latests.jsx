import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';
import Button from './Button';
import LatestsHover from './LatestsHover';

const Latests = () => {
  const [isShowHover, setIsShowHover] = useState(false);
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
          <LatestsItemBig>
            <LatestsHover size={'big'} />
          </LatestsItemBig>
          <LatestsItemSmallOne
            onMouseEnter={() => setIsShowHover(true)}
            onMouseLeave={() => setIsShowHover(false)}>
            <LatestsHover isShowHover={isShowHover} />
          </LatestsItemSmallOne>
          <LatestsItemSmallTwo>
            <LatestsHover isShowHover={isShowHover} />
          </LatestsItemSmallTwo>
          <LatestsItemSmallThree />
        </LatestsItems>
      </Container>
    </LatestsWrap>
  );
};

const LatestsWrap = styled.section`
  margin-bottom: ${rem(160)};
`;

const LatestsInner = styled.div``;
const LatestsTop = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const latestItemStyles = css`
  border-radius: ${(props) => rem(props.theme.radius.latest)};
  overflow: hidden;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

const LatestsItemBig = styled.div`
  grid-area: LatestsItemBig;
  background: url('images/project-1.jpg') no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallOne = styled.div`
  grid-area: LatestsItemSmallOne;
  background: url('images/project-2.jpg') no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallTwo = styled.div`
  grid-area: LatestsItemSmallTwo;
  background: url('images/project-3.jpg') no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallThree = styled.div`
  grid-area: LatestsItemSmallThree;
  background: url('images/project-4.jpg') no-repeat center center;
  ${latestItemStyles};
`;

export default Latests;
