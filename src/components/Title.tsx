import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { rem } from "polished";

interface ITitle {
  color?: string;
  className?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const StyledTitle = styled.div<{ as: string }>`
  color: var(--color);
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: ${rem(48)};
    `}

  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: ${rem(64)};
      line-height: 138%;
      @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        font-size: ${rem(54)};
      }
    `}
`;

const Title = ({ tag, children, color, className }: ITitle) => {
  return (
    <StyledTitle
      as={tag}
      className={className}
      style={{ "--color": color } as React.CSSProperties}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
