import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Circle = ({ w = 400, h = 400, img = 'images/circle-1.jpg' }) => {
  return <CircleWrap w={w} h={h} img={img}></CircleWrap>;
};

export const CircleWrap = styled.div`
  width: ${(props) => rem(props.w)};
  height: ${(props) => rem(props.h)};
  border-radius: 50%;
  background: url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
`;

export default Circle;
