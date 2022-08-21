import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <RotatingLines strokeColor="#1d628b" />
    </LoaderContainer>
  );
};

export default Loader;
