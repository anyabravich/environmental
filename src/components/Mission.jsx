import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H5Wrap } from './H5';
import { TextBodyWrap } from './TextBody';

const Mission = ({ className, img = '', title = '', description = '' }) => {
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
  transition: background ${(props) => props.theme.transition.default};
  &:hover {
    background: ${(props) => props.theme.colors.primary.dark.green};
    transition: background ${(props) => props.theme.transition.default};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${rem(32)} 0;
    pointer-events: none;
  }
`;

const MissionIcon = styled.div`
  width: ${rem(80)};
  height: ${rem(80)};
  margin-bottom: ${rem(24)};
  display: block;
  background: url(${(props) => `images/mission/${props.img}.svg`}) no-repeat center center;
  background-size: cover;
  transition: background ${(props) => props.theme.transition.default};
  ${MissionWrap}:hover && {
    background: url(${(props) => `images/mission/${props.img}-hover.svg`}) no-repeat center center;
    background-size: cover;
    transition: background ${(props) => props.theme.transition.default};
  }
`;

const MissionTitle = styled(H5Wrap)`
  margin-bottom: ${rem(16)};
  transition: color ${(props) => props.theme.transition.default};
  ${MissionWrap}:hover & {
    color: ${(props) => props.theme.colors.white};
    transition: color ${(props) => props.theme.transition.default};
  }
`;

const MissionDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.default};
  transition: color ${(props) => props.theme.transition.default};
  ${MissionWrap}:hover & {
    color: ${(props) => props.theme.colors.text.disable};
    transition: color ${(props) => props.theme.transition.default};
  }
`;

export default Mission;
