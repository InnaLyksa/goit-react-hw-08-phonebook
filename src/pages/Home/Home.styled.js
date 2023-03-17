import styled from 'styled-components';

export const PageHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 60px;
  &::before {
    content: '📗';
    margin-right: 10px;
    font-size: 58px;
  }
`;
