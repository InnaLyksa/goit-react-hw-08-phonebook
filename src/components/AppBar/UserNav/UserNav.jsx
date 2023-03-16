import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrapper, Text, Button } from './UserNav.styled';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <Wrapper>
      <Text> Welcome, {user.name}!</Text>
      <Button type="button" color="inherit" onClick={handleLogOut}>
        LogOut
      </Button>
    </Wrapper>
  );
}

export default UserMenu;
