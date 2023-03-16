import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import Paper from '@mui/material/Paper';
import { Overlay, Modal } from './ModalAddContact.styled';
// import { phoneBookApi } from '../../redux/api/phoneBookRTK';
// import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import { Warn, Success, Error } from '../../components/utils/notification';
// import {
//   FormAddContact,
//   LabelContactForm,
//   InputContactForm,
//   ButtonSubmit,
//   MessageError,
// } from '../ContactForm/ContactForm.styled';

const modalRoot = document.querySelector('#modal-root');
// const nameInputId = nanoid();
// const numberInputId = nanoid();

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

// const initialValues = {
//   name: '',
//   number: '',
// };
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup
//     .string()
//     .matches(numberRegEx, { message: 'Please enter valid number.' })
//     .required('Phone is required'),
// });

const AddContactModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const { data: contacts } = fetchContacts();
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  // const handleSubmit = (values, { resetForm }) => {
  //   const isDublicateName = contacts.find(
  //     ({ name }) => name.toLowerCase() === values.name.toLowerCase()
  //   );
  //   const isDublicateNumber = contacts.find(
  //     ({ number }) => number === values.number
  //   );
  //   if (isDublicateName) {
  //     return Notification(values.name);
  //   } else {
  //     if (isDublicateNumber) {
  //       return Notification(values.number);
  //     }
  //   }
  //   console.log(values);
  //   try {
  //     dispatch(addContact(values));
  //     // toast.success('Contact added');
  //     resetForm();
  //     onClose();
  //   } catch (error) {
  //     console.log(`${error.message}`);
  //   }
  // };

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

  const handleSubmit = event => {
    event.preventDefault();

    const isDublicateName = allContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isDublicateNumber = allContacts.find(
      contact => contact.number === number
    );
    if (isDublicateName) {
      return Warn(name);
    } else {
      if (isDublicateNumber) {
        return Warn(number);
      }
    }
    try {
      dispatch(addContact({ name, number }));
      Success(name, 'is added to');
      setName('');
      setNumber('');
      onClose();
    } catch (error) {
      Error();
      console.log(`${error.message}`);
    }
  };

  const switchScrollBody = state => {
    Object.assign(document.body.style, {
      overflowY: state,
    });
  };

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <Modal
        sx={
          {
            // width: '100%',
            // bgcolor: 'background.paper',
            // color: 'text.primary',
          }
        }
      >
        {/* <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <FormAddContact autoComplete="off">
            <LabelContactForm htmlFor={nameInputId}> Name:</LabelContactForm>
            <InputContactForm type="text" name="name" id={nameInputId} />
            <MessageError name="name" component="div" />

            <LabelContactForm htmlFor={numberInputId}>Number:</LabelContactForm>
            <InputContactForm id={numberInputId} type="tel" name="number" />
            <MessageError name="number" component="div" />

            <ButtonSubmit type="submit">Add contact</ButtonSubmit>
            <ButtonSubmit type="button" onClick={onClose}>
              Cancel
            </ButtonSubmit>
          </FormAddContact>
        </Formik> */}
        <Box
          component="form"
          color="inherit"
          validate={schema}
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
          // noValidate
          // autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            name="name"
            label="Enter contact name"
            variant="outlined"
            fullWidth
            required
            autoFocus
            // sx={{ m: 2 }}

            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="number"
            name="number"
            label="Enter contact number"
            variant="outlined"
            fullWidth
            required
            // helperText="Incorrect entry."

            // inputProps={{
            //   inputMode: 'numeric',
            //   pattern:
            //     /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            // }}
            onChange={e => setNumber(e.target.value)}
          />
          <div>
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
                bgcolor: 'background.button',
                color: 'text.primary',
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;
