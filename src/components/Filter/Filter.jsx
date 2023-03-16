import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/contactsSelectors';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch(changeFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <TextField
      id="logFilter"
      label="Find contact by name"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      sx={{ width: 350, marginBottom: 3 }}
      size="small"
    />
  );
};
