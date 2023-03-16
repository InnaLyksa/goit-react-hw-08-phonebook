import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* width: 150px; */
`;
export const StyledLink = styled(NavLink)`
  color: inherit;
  /* font-size: */
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: underline;
  }
  &.active {
    color: white;
    text-decoration: underline;
  }
`;
