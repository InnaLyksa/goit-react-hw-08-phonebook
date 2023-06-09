import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormAddContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const LabelContactForm = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputContactForm = styled(Field)`
  width: 300px;
  padding: 8px;
  font-size: 24px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid green;
  box-shadow: 4px 4px 8px 0px rgb(23 24 23 / 20%);
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const MessageError = styled(ErrorMessage)`
  color: red;
`;
