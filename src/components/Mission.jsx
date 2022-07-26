import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H5Wrap } from './H5';
import { TextBodyWrap } from './TextBody';

// TODO: перенести все transition в theme (время и timing-function)

const Mission = ({
  className,
  img = 'icon-1',
  title = 'Solar System',
  description = 'Make the appearance of a mobile application that has quality and increases user convenience',
}) => {
  return (
    <MissionWrap>
      <MissionIcon img={img} className={className} />
      <MissionTitle bgLight={true}>{title}</MissionTitle>
      <MissionDescription>{description}</MissionDescription>
    </MissionWrap>
  );
};

const MissionWrap = styled.article`
  padding: ${rem(32)};
  border-radius: ${(props) => rem(props.theme.radius.mission)};
  /* max-width: ${rem(400)}; */
  transition: background 100ms linear;
  &:hover {
    background: ${(props) => props.theme.colors.primary.dark.green};
    transition: background 100ms linear;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${rem(32)} 0;
    pointer-events: none;
  }
`;

// TODO: пересохранить все иконки без подложки, сделать подлодку средствами css
const MissionIcon = styled.div`
  width: ${rem(80)};
  height: ${rem(80)};
  margin-bottom: ${rem(24)};
  display: block;
  background: url(${(props) => `images/mission/${props.img}.svg`}) no-repeat center center;
  background-size: cover;
  transition: background 100ms linear;
  ${MissionWrap}:hover && {
    background: url(${(props) => `images/mission/${props.img}-hover.svg`}) no-repeat center center;
    background-size: cover;
    transition: background 100ms linear;
  }
`;

const MissionTitle = styled(H5Wrap)`
  margin-bottom: ${rem(16)};
  transition: color 100ms linear;
  ${MissionWrap}:hover & {
    color: ${(props) => props.theme.colors.text.white};
    transition: color 100ms linear;
  }
`;

const MissionDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.default};
  transition: color 100ms linear;
  ${MissionWrap}:hover & {
    color: ${(props) => props.theme.colors.text.disable};
    transition: color 100ms linear;
  }
`;

export default Mission;
