import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Overlay, Modal } from './ModalAddContact.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Warn, Success, Error } from '../../components/utils/notification';
import {
  FormAddContact,
  LabelContactForm,
  InputContactForm,
  MessageError,
  BtnWrap,
} from './ContactForm.styled';

const modalRoot = document.querySelector('#modal-root');
const nameInputId = nanoid();
const numberInputId = nanoid();

const numberRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, {
      message:
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan',
      excludeEmptyString: false,
    })
    .required('Name is required field!'),
  number: yup
    .string()
    .matches(numberRegEx, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      excludeEmptyString: false,
    })
    .required('Number is required field!'),
});

const initialValues = {
  name: '',
  number: '',
};

const AddContactModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDublicateName = allContacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    const isDublicateNumber = allContacts.find(
      ({ number }) => number === values.number
    );
    if (isDublicateName) {
      return Warn(values.name);
    } else {
      if (isDublicateNumber) {
        return Warn(values.number);
      }
    }
    console.log(values);
    try {
      dispatch(addContact(values));
      Success(values.name, 'is added to');
      resetForm();
      onClose();
    } catch (error) {
      Error();
      // console.log(`${error.message}`);
    }
  };

  const handleEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    switchScrollBody('hidden');
    return () => {
      window.removeEventListener('keydown', handleEsc);
      switchScrollBody('scroll');
    };
  });

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const switchScrollBody = state => {
    Object.assign(document.body.style, {
      overflowY: state,
    });
  };

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <Box
          color="inherit"
          sx={{
            width: '100%',
            padding: 2,
            minHeight: 300,
            bgcolor: 'background.paper',
            color: 'text.primary',
            display: 'flex',
            gap: 2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            <FormAddContact autoComplete="off">
              <LabelContactForm htmlFor={nameInputId}> Name:</LabelContactForm>
              <InputContactForm type="text" name="name" id={nameInputId} />
              <MessageError name="name" component="div" />

              <LabelContactForm htmlFor={numberInputId}>
                Number:
              </LabelContactForm>
              <InputContactForm id={numberInputId} type="tel" name="number" />
              <MessageError name="number" component="div" />
              <BtnWrap>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    bgcolor: '#4caf50',
                    color: 'text.primary',
                  }}
                >
                  Add contact
                </Button>
                <Button
                  variant="contained"
                  onClick={onClose}
                  sx={{
                    ml: 2,
                    bgcolor: 'btnRed',
                    color: 'text.primary',
                  }}
                >
                  Cancel
                </Button>
              </BtnWrap>
            </FormAddContact>
          </Formik>
        </Box>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;
