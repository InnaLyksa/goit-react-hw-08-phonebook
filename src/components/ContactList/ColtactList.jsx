import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/contactsSelectors';

import { fetchContacts } from 'redux/contacts/contactOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !contacts.length ? (
        <Typography
          variant="h5"
          component="h2"
          color="text.primary"
          sx={{ color: '#e57373' }}
        >
          You have not contacts yet
        </Typography>
      ) : (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};
