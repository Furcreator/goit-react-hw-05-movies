import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ImgNF = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  overflow: hidden;
`;

export const ContainerNF = styled.div`
  display: flex;
  background-color: darkseagreen;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const NavLinkNF = styled(NavLink)`
  color: mediumvioletred;
  text-decoration: none;
  background: antiquewhite;
  border: dashed;
  border-radius: 50px;
  padding: 9px 30px;
  width: 90px;
  height: 40px;
  text-align: center;
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
