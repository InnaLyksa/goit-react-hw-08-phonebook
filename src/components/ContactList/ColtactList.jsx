import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

import { fetchContacts } from 'redux/contacts/contactOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
};
