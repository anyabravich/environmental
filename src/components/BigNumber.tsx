import styled from "styled-components";
import { rem } from "polished";

const BigNumber = ({ children }: { children: React.ReactNode }) => {
  return <BigNumberWrap>{children}</BigNumberWrap>;
};

export const BigNumberWrap = styled.div`
  font-weight: 700;
  font-size: ${rem(160)};
  line-height: 105%;
  text-align: right;
  color: ${(props) => props.theme.colors.text.disable};
`;

export default BigNumber;
