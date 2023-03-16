import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* min-width: 300px; */
`;
export const Text = styled.p`
  font-size: 14px;
`;
export const Button = styled.button`
  color: inherit;
  font-size: 18px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
