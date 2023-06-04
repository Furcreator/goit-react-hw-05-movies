import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastOfMovie } from 'utils/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getCastOfMovie(moviesId).then(data => {
      setCast(data.cast);
    });
  }, [moviesId]);
  return <div cast={cast}></div>;
};
export default Cast;
