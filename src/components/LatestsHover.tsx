import styled from "styled-components";
import { rem } from "polished";
import { TextBodyWrap } from "./TextBody";
import { H5Wrap } from "./H5";

interface ILatestsHover {
  size?: "small" | "large" | "big";
  isShowHover?: boolean;
}

const LatestsHover = ({ size = "small", isShowHover }: ILatestsHover) => {
  return (
    <LatestsHoverWrap size={size} isShowHover={isShowHover}>
      <LatestsHoverText>
        <LatestsHoverSubTitle>Environment, Climate Change</LatestsHoverSubTitle>
        <LatestsHoverTitle>
          Carbon Footprints and Climate Change
        </LatestsHoverTitle>
      </LatestsHoverText>
      <LatestsHoverArrow />
    </LatestsHoverWrap>
  );
};

const LatestsHoverText = styled.div``;

const LatestsHoverArrow = styled.div`
  width: ${rem(40)};
  height: ${rem(40)};
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.155 7.84495L24.31 19.9999L12.155 32.1549L14.5117 34.5116L29.0234 19.9999L14.5117 5.48828L12.155 7.84495Z' fill='white'/%3E%3C/svg%3E%0A")
    no-repeat center center;
  background-size: cover;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: ${rem(20)};
    height: ${rem(20)};
  }
`;

const LatestsHoverSubTitle = styled(TextBodyWrap)`
  margin-bottom: ${rem(8)};
  font-size: 1vw;
  @media (min-width: ${(props) => props.theme.breakpoints.xxxl}) {
    font-size: ${rem(16)};
  }
`;

const LatestsHoverTitle = styled(H5Wrap)`
  font-size: 1.5vw;
  @media (min-width: ${(props) => props.theme.breakpoints.xxxl}) {
    font-size: ${rem(24)};
  }
`;

const LatestsHoverWrap = styled.div<{ size: string; isShowHover?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12%;
  padding: ${(props) => (props.size === "small" ? `6%` : `5.4%`)};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary.dark.green};
  width: 100%;
`;

export default LatestsHover;
