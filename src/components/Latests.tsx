import styled, { css } from "styled-components";
import { rem } from "polished";

import Button from "./Button";
import LatestsHover from "./LatestsHover";
import Title from "./Title";
import Container from "./Container";

const Latests = () => {
  return (
    <LatestsWrap id="project">
      <Container>
        <LatestsInner>
          <LatestsTop>
            <LatestsTitle tag="h2">Our Latest Project</LatestsTitle>
            <Button>See All</Button>
          </LatestsTop>
        </LatestsInner>
        <LatestsItems>
          <LatestsItemBig>
            <LatestHoverWrap>
              <LatestsHover size={"big"} />
            </LatestHoverWrap>
          </LatestsItemBig>
          <LatestsItemSmallOne>
            <LatestHoverWrap>
              <LatestsHover />
            </LatestHoverWrap>
          </LatestsItemSmallOne>
          <LatestsItemSmallTwo>
            <LatestHoverWrap>
              <LatestsHover />
            </LatestHoverWrap>
          </LatestsItemSmallTwo>
          <LatestsItemSmallThree>
            <LatestHoverWrap>
              <LatestsHover />
            </LatestHoverWrap>
          </LatestsItemSmallThree>
        </LatestsItems>
      </Container>
    </LatestsWrap>
  );
};

const LatestsWrap = styled.section`
  margin-bottom: ${rem(160)};
`;

const LatestsInner = styled.div``;

const LatestsTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(40)};
  margin-bottom: ${rem(40)};
`;

const LatestsTitle = styled(Title)``;

const LatestsItems = styled.div`
  width: 100%;
  display: grid;
  gap: ${rem(16)};
  grid-template-areas: "LatestsItemBig LatestsItemSmallOne" "LatestsItemBig LatestsItemSmallTwo" "LatestsItemBig LatestsItemSmallThree";
  grid-template-columns: 66% 1fr;
  overflow: hidden;
  min-height: 100%;
  aspect-ratio: 1232 / 752;
`;

const latestItemStyles = css`
  border-radius: ${(props) => rem(props.theme.radius.latest)};
  overflow: hidden;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

const LatestsItemBig = styled.div`
  grid-area: LatestsItemBig;
  background: url("images/project-1.jpg") no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallOne = styled.div`
  grid-area: LatestsItemSmallOne;
  background: url("images/project-2.jpg") no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallTwo = styled.div`
  grid-area: LatestsItemSmallTwo;
  background: url("images/project-3.jpg") no-repeat center center;
  ${latestItemStyles};
`;

const LatestsItemSmallThree = styled.div`
  grid-area: LatestsItemSmallThree;
  background: url("images/project-4.jpg") no-repeat center center;
  ${latestItemStyles};
`;

const LatestHoverWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
  transition: transform 300ms linear;
  ${LatestsItemBig}:hover &,
  ${LatestsItemSmallOne}:hover &,
  ${LatestsItemSmallTwo}:hover &,
  ${LatestsItemSmallThree}:hover & {
    transform: translateY(0%);
    transition: transform 300ms linear;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    pointer-events: none;
    transform: translateY(0%);
  }
`;

export default Latests;
