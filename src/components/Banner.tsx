import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H2Wrap } from './H2';
import { TextBodyWrap } from './TextBody';
import Button from './Button';

const Banner = () => {
  return (
    <BannerWrap>
      <BannerSVG fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M0.001,0.001 H0.826 C0.876,0.001,0.918,0.046,0.924,0.105 L1,0.868 C1,0.939,0.961,1,0.902,1 H0.001 V0.001" />
          </clipPath>
        </defs>
      </BannerSVG>
      <BannerContent clipPath="url(#myClip)">
        <BannerContentInner>
          <BannerTitle>The Way You Help&nbsp;Us 🍀</BannerTitle>
          <BannerDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat facilisis quam
            volutpat turpis. Felis mi, ultrices ornare duis.
          </BannerDescription>
          <BannerButtons>
            <Button>Donate</Button>
            <Button>Take Action</Button>
          </BannerButtons>
        </BannerContentInner>
      </BannerContent>
    </BannerWrap>
  );
};

const BannerWrap = styled.section`
  width: 100%;
  height: ${rem(672)};
  background: url('images/banner-1.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
`;

const BannerContent = styled.div`
  background: ${(props) => props.theme.colors.primary.dark.green};
  max-width: ${rem(807)};
  width: 100%;
  height: calc(100% + 1px);
  clip-path: ${(props) => props.clipPath};
  margin-left: ${rem(-1)};
  position: relative;
  top: ${rem(-1)};
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    clip-path: none;
    margin-left: 0;
    max-width: 100%;
  }
`;

const BannerSVG = styled.svg`
  position: absolute;
`;

const BannerContentInner = styled.div`
  padding-left: 13%;
  padding-right: 20%;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 8%;
  }
`;

const BannerTitle = styled(H2Wrap)`
  margin-bottom: ${rem(24)};
`;

const BannerDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.disable};
  margin-bottom: ${rem(40)};
`;

const BannerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(24)};
`;

export default Banner;
