import { Ul } from 'components/ListOfMovies/ListOfMovies.styled';
import CastListItem from '../CastListItem/CastListItem';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <>
      <Ul>
        {cast.map(cast => (
          <CastListItem key={cast.id} cast={cast} />
        ))}
      </Ul>
    </>
  );
};
export default CastList;
CastList.propType = {
  cast: PropTypes.array.isRequired,
};
