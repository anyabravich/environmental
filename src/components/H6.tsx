import styled from "styled-components";
import { rem } from "polished";

const H6 = ({ children }: { children: React.ReactNode }) => {
  return <H6Wrap>{children}</H6Wrap>;
};

export const H6Wrap = styled.h6`
  font-style: normal;
  font-size: ${rem(16)};
  line-height: 150%;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.body.text};
`;

export default H6;
