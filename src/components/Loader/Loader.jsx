import { InfinitySpin } from 'react-loader-spinner';
import { LoaderWrap } from '../Loader/Loader.styled';
export const Loader = () => {
  return (
    <LoaderWrap>
      <InfinitySpin color="green" ariaLabel="loading" />
    </LoaderWrap>
  );
};
