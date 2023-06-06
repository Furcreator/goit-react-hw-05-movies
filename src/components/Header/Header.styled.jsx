import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  padding: 15px;
  background-color: darkseagreen;
  display: flex;
  align-items: center;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 10px;
`;
export const NavLinkStyled = styled(NavLink)`
  color: mediumvioletred;
  text-decoration: none;
  background: antiquewhite;
  border: dashed;
  border-radius: 50px;
  padding: 9px 30px;
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
    background: mediumvioletred;
    color: aquamarine;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &.active {
    font-weight: 900;
    background: mediumvioletred;
    color: aquamarine;
  }
`;
