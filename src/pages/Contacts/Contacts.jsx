import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Wrapper } from './Contacts.styled';
import AddContactModal from '../../components/ModalAddContact/ModalAddContact';

import { ContactList } from 'components/ContactList/ColtactList';
import { Filter } from 'components/Filter/Filter';

function Contacts() {
  const [showAddingModal, setShowAddingModal] = useState(false);

  const toggleAddingModal = () => {
    setShowAddingModal(!showAddingModal);
  };
  return (
    <Wrapper>
      <Filter />
      <Stack direction="row" sx={{ marginBottom: 2, gap: 4 }}>
        <Typography variant="h4">Contacts</Typography>

        <Button
          variant="contained"
          endIcon={<AddCircleOutlineIcon />}
          onClick={toggleAddingModal}
          sx={{
            bgcolor: 'btnGreen',
            color: 'text.primary',
          }}
        >
          Add new contact
        </Button>
      </Stack>
      <ContactList />
      {showAddingModal && <AddContactModal onClose={toggleAddingModal} />}
    </Wrapper>
  );
}

export default Contacts;
