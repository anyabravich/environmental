import styled from "styled-components";
import { rem } from "polished";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Logo />
          <Menu />
          <Button type={"standard"}>Login</Button>
        </NavInner>
      </Container>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  padding: ${rem(32)} 0;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondary.rich.green};
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Nav;
