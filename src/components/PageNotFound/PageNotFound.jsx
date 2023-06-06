import PageNotFoundImage from '../../images/pnd.png';
import { ContainerNF, ImgNF, NavLinkNF } from './PageNotFound.styled';
const PageNotFound = () => {
  return (
    <ContainerNF>
      <ImgNF src={PageNotFoundImage} alt="searching" />
      <NavLinkNF to="/">Перейти на головну</NavLinkNF>
    </ContainerNF>
  );
};

export default PageNotFound;
