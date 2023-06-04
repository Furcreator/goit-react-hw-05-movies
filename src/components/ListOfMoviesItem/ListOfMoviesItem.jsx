import { Link, NavLink, useLocation } from 'react-router-dom';
import noPhoto from '../../images/noPhoto.png';
const ListOfMoviesItem = ({ movie }) => {
  const location = useLocation();
  let posterPath = noPhoto;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <>
          <img src={posterPath} width={`50px`} height={`50px`} alt="preview" />
        </>
      </Link>
      {movie.title && (
        <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.title}</span>
        </NavLink>
      )}
      {/* якщо назва фільму в параметрі film.name */}
      {movie.name && (
        <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.name}</span>
        </NavLink>
      )}
    </li>
  );
};
export default ListOfMoviesItem;
