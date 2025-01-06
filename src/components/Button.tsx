import styled from "styled-components";
import { rem } from "polished";

interface IButton {
  children: React.ReactNode;
  view?: string;
  size?: string;
  type?: string;
  state?: string;
  icon?: boolean;
  align?: string;
  full?: boolean;
}

const Button = ({
  children,
  view = "primary",
  size = "large",
  type = "justify",
  state = "active",
  icon = false,
  align = "left",
  full = false,
}: IButton) => {
  return (
    <ButtonWrap
      view={view}
      size={size}
      type={type}
      state={state}
      icon={icon}
      align={align}
      full={full}
    >
      {children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button`
  width: ${(props) => (props.full ? "100%" : "auto")};
  background: ${(props) => props.theme.colors.primary.default};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(24)};
  ${(props) => {
    if (props.type === "standard") {
      return `
        min-width: ${rem(120)};
        padding: ${rem(12)} ${rem(15)};
      `;
    } else if (props.type === "justify") {
      return `
        min-width: ${rem(160)};
        padding: ${rem(12)} ${rem(35)};
      `;
    }
  }}
  border-radius: ${(props) => rem(props.theme.radius.button)};
  font-family: "Inter", sans-serif;
  cursor: pointer;
  transition: ${(props) => props.theme.transition.hover};
  &:hover {
    background: ${(props) => props.theme.colors.primary.hover};
    transition: ${(props) => props.theme.transition.hover};
  }
`;

export default Button;
