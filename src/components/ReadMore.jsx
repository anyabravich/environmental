import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const ReadMore = () => {
  return <ReadMoreWrap>Read More</ReadMoreWrap>;
};

export const ReadMoreWrap = styled.a`
  font-weight: 700;
  font-size: ${rem(16)};
  line-height: 150%;
  color: ${(props) => props.theme.colors.primary.green};
`;

export default ReadMore;
