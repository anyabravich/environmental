import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setMenuItems(json['menuItems']));
  }, []);

  return (
    <MenuWrap>
      {menuItems.map(({ link, name }, index) => (
        <MenuItem key={index}>
          <MenuLink to={link}>{name}</MenuLink>
        </MenuItem>
      ))}
    </MenuWrap>
  );
};

const MenuWrap = styled.ul`
  display: flex;
  gap: ${rem(48)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  position: relative;
  padding-bottom: ${rem(8)};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: 150%;
  color: ${(props) => props.theme.colors.white};
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.primary.default};
    width: 0%;
    height: ${rem(4)};
    transition: width 200ms linear;
  }
  &:hover::before {
    width: 100%;
    transition: width 200ms linear;
  }
`;

export default Menu;
