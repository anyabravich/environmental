import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const ButtonPlay = () => {
  return (
    <ButtonPlayWrap>
      <ButtonPlayIcon src={'/images/icon-play.svg'} />
      <ButtonPlayText>How it Works</ButtonPlayText>
    </ButtonPlayWrap>
  );
};

const ButtonPlayWrap = styled.button`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
`;
const ButtonPlayIcon = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
`;

const ButtonPlayText = styled.div`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: 171%;
  color: ${(props) => props.theme.colors.white};
`;

export default ButtonPlay;
