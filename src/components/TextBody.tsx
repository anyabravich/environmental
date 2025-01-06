import styled from "styled-components";
import { rem } from "polished";

const TextBody = ({ children }: { children: React.ReactNode }) => {
  return <TextBodyWrap>{children}</TextBodyWrap>;
};

export const TextBodyWrap = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 200%;
  color: ${(props) => props.theme.colors.text.disable};
`;

export default TextBody;
