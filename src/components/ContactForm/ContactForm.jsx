import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Notification } from '../../components/utils/notification';
import {
  FormAddContact,
  LabelContactForm,
  InputContactForm,
  ButtonSubmit,
  MessageError,
} from './ContactForm.styled';

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

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDublicateName = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    const isDublicateNumber = contacts.find(
      ({ number }) => number === values.number
    );
    if (isDublicateName) {
      return Notification(values.name);
    } else {
      if (isDublicateNumber) {
        return Notification(values.number);
      }
    }
    console.log(values);
    try {
      dispatch(addContact(values));
      // toast.success('Contact added');
      resetForm();
    } catch (error) {
      console.log(`${error.message}`);
    }
  };
  // dispatch(addContact(values));
  // resetForm();

  return (
    <Formik
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
      </FormAddContact>
    </Formik>
  );
};
