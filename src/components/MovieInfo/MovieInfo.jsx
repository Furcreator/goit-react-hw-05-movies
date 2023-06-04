import { useEffect, useState } from 'react';
import { getMovieById } from 'utils/api';

const MovieInfo = ({ moviesId }) => {
  const [movieByID, setMovieByID] = useState(null);

  useEffect(() => {
    getMovieById(moviesId).then(movie => setMovieByID(movie));
  }, [moviesId]);
  console.log(movieByID);
  return <>INFO</>;
};
export default MovieInfo;
