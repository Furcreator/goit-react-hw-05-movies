import { createPortal } from 'react-dom';
import { ColorRing } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderContainer>,
    loaderRoot
  );
};
export default Loader;
