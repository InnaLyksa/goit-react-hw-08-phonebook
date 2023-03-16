import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterValue = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    // console.log('111!');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);
