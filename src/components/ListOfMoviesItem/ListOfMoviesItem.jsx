import { Link, useLocation } from 'react-router-dom';
import noPhoto from '../../images/noPhoto.png';
import { Img, Li, StyledNavLink, Thumb } from './ListOfMoviesItem.styled';
import PropTypes from 'prop-types';
const ListOfMoviesItem = ({ movie }) => {
  const location = useLocation();
  let posterPath = noPhoto;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  return (
    <Li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <Thumb>
          <Img src={posterPath} width={`50px`} height={`50px`} alt="preview" />
        </Thumb>
      </Link>
      {movie.title && (
        <StyledNavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.title}</span>
        </StyledNavLink>
      )}
      {/* якщо назва фільму в параметрі film.name */}
      {movie.name && (
        <StyledNavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.name}</span>
        </StyledNavLink>
      )}
    </Li>
  );
};
export default ListOfMoviesItem;
ListOfMoviesItem.propType = {
  movie: PropTypes.object.isRequired,
};
