import PropTypes from 'prop-types';
import { ReactComponent as Phone } from '../../images/icons/phone.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';
import Button from '@mui/material/Button';
import { Success } from '../../components/utils/notification';
import { ContactListItem, ContactText } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    Success(name, 'is deleted from ');
  };

  return (
    <ContactListItem>
      <ContactText href={`tel:${number}`}>
        <Phone />
        {name}: {number}
      </ContactText>
      <Button
        variant="contained"
        onClick={handleDeleteContact}
        sx={{
          ml: 2,
          bgcolor: 'background.button',
          color: 'text.primary',
        }}
      >
        Delete
      </Button>
    </ContactListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
