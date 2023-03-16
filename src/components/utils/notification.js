import { toast } from 'react-toastify';
const options = {
  position: 'bottom-center',
  autoClose: 2000,
  theme: 'colored',
};

export const Warn = item =>
  toast.warn(`${item} is already in contacts`, options);

export function Error() {
  toast.error('Something is wrong. Try again', options);
}
export const Success = (item, text) => {
  toast.success(`${item} ${text} the phonebook`, options);
};
export const registerSuccess = () =>
  toast.success('The registration  was successful', options);

export const registerError = () =>
  toast.error('The registration was failed. Try again', options);

export const loginSuccess = () =>
  toast.success('Welcome to the Phonebook', options);

export const loginError = () =>
  toast.error('Your loginisation was failed. Try again', options);

export const logoutSuccess = () =>
  toast.success('Logout was successful', options);

export const logoutError = () =>
  toast.error('Logout failed. Try again', options);
