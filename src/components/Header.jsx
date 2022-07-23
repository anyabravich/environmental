import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';
import { TextBodyWrap } from './TextBody';
import Button from './Button';
import ButtonPlay from './ButtonPlay';
import { CircleWrap } from './Circle';

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <HeaderContent>
            <HeaderTitle>Lets Make our Earth Green and Clean ☘️</HeaderTitle>
            <HeaderTextBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat facilisis quam
              volutpat turpis. Felis mi, ultrices ornare duis placerat erat.
            </HeaderTextBody>
            <HeaderButtons>
              <Button>Start Today</Button>
              <ButtonPlay />
            </HeaderButtons>
          </HeaderContent>
          <HeaderCircles>
            <HeaderCirclesInner>
              <CircleOne w={400} h={400} img={'images/circle-1.jpg'} />
              <CircleTwo w={240} h={240} img={'images/circle-2.jpg'} />
              <CircleThree w={200} h={200} img={'images/circle-3.jpg'} />
            </HeaderCirclesInner>
          </HeaderCircles>
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  padding: ${rem(80)} 0 ${rem(40)};
  min-height: ${rem(680)};
  background: ${(props) => props.theme.colors.secondary.rich.green};
  border-radius: 0 0 0 ${rem(80)};
  overflow: hidden;
  margin-bottom: ${rem(160)};
  margin-top: -1px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: 0;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  gap: ${rem(120)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;

const HeaderContent = styled.div`
  flex: 1 0 50%;
`;

const HeaderCircles = styled.div`
  flex: 1 0 50%;
`;

const HeaderCirclesInner = styled.div`
  position: relative;
`;

const HeaderTitle = styled(H2Wrap)`
  margin-bottom: ${rem(24)};
  max-width: ${rem(608)};
  width: 100%;
`;

const HeaderTextBody = styled(TextBodyWrap)`
  margin-bottom: ${rem(40)};
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(31)};
`;

const CircleOne = styled(CircleWrap)`
  margin-top: ${rem(-55)};
  margin-left: ${rem(-10)};
`;
const CircleTwo = styled(CircleWrap)`
  margin-top: ${rem(-163)};
  margin-left: ${rem(391)};
`;
const CircleThree = styled(CircleWrap)`
  margin-top: ${rem(-62)};
  margin-left: ${rem(191)};
`;

export default Header;
