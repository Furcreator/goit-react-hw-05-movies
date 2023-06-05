import { NavLink } from 'react-router-dom';
import PageNotFoundImage from '../../images/pnd.png';
const PageNotFound = () => {
  return (
    <div>
      <img src={PageNotFoundImage} alt="searching" />
      <NavLink to="/">Перейти на головну</NavLink>
    </div>
  );
};

export default PageNotFound;
