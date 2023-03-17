import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 8px;

  flex-direction: row;
  align-items: center;
  /* width: 180px; */
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
    text-decoration: underline;
  }
  &.active {
    color: white;
    text-decoration: underline;
  }
`;
