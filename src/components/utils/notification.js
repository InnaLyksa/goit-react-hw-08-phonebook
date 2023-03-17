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

export const authSuccess = text => {
  toast.success(`${text}`, options);
};
export const authError = text => {
  toast.error(`${text}`, options);
};
