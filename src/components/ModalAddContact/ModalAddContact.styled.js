import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Modal = styled.div`
  z-index: 100;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 400px;
  width: 100%;

  border-radius: 4px;
  box-shadow: 3px 2px 1px 1px rgba(0, 0, 0, 0.3),
    2px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
