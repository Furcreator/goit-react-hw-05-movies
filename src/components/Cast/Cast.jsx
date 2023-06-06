import CastList from 'components/CastList/CastList';
import {
  NoReviewsAndCast,
  NoReviewsTextAndCast,
} from 'components/Reviews/Reviews.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastOfMovie } from 'utils/api';
import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getCastOfMovie(moviesId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => setError(error));
  }, [moviesId]);
  return (
    <>
      {error && <p>{error}</p>}
      {cast && <CastList cast={cast} />}
      {(!cast || cast.length === 0) && (
        <NoReviewsAndCast>
          <NoReviewsTextAndCast>There is no casts</NoReviewsTextAndCast>
        </NoReviewsAndCast>
      )}
    </>
  );
};
export default Cast;

Cast.propTypes = {
  getCastOfMovie: PropTypes.func,
};
