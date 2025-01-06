import styled from "styled-components";
import { rem } from "polished";

interface ICircle {
  w?: number;
  h?: number;
  img?: string;
}

const Circle = ({ w = 400, h = 400, img = "images/circle-1.jpg" }: ICircle) => {
  return <CircleWrap w={w} h={h} img={img}></CircleWrap>;
};

export const CircleWrap = styled.div<{ w: number; h: number; img: string }>`
  width: ${(props) => rem(props.w)};
  height: ${(props) => rem(props.h)};
  border-radius: 50%;
  background: url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
`;

export default Circle;
