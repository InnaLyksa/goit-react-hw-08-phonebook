import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  Error,
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
} from 'components/utils/notification';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addNewUser = createAsyncThunk(
  'auth/addNewUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      registerSuccess();
      return data;
    } catch (error) {
      registerError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      loginSuccess();
      return data;
    } catch (error) {
      loginError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    token.unset();
    logoutSuccess();
  } catch (error) {
    logoutError();
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const currentToken = thunkAPI.getState().auth.token;
  if (currentToken === null) {
    return thunkAPI.rejectWithValue('No valid token');
  }
  try {
    token.set(currentToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    Error();
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  addNewUser,
  loginUser,
  logoutUser,
  refreshUser,
};
export default authOperations;
