import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieById } from 'utils/api';
import { NavLinkStyled } from 'components/Header/Header.styled';
import PropTypes from 'prop-types';
const MovieInfo = ({ moviesId }) => {
  const [movieById, setMovieById] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(moviesId).then(movie => setMovieById(movie));
  }, [moviesId]);
  return (
    <>
      <NavLinkStyled to={backLinkLocationRef.current}>Back</NavLinkStyled>
      {movieById && <MovieCard movie={movieById}></MovieCard>}
    </>
  );
};
export default MovieInfo;
MovieInfo.propType = {
  moviesId: PropTypes.string.isRequired
}