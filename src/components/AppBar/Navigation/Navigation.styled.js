import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import Link from '@mui/material/Link';
// import { styled } from '@mui/material/styles';

// export const LinkStyled = styled(Link)`
//   /* color: 'main'; */
//   //   /* font-size: */
//   text-decoration: none;
//   &:hover,
//   &:active {
//     color: white;
//     text-decoration: underline;
//   }
// `;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;

  flex-direction: row;
  align-items: center;
  /* width: 180px; */
`;

export const StyledLink = styled(NavLink)`
  /* color: inherit;
  color: black; */
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
