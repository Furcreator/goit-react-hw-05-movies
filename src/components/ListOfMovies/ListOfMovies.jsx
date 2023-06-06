import ListOfMoviesItem from 'components/ListOfMoviesItem/ListOfMoviesItem';
import { Ul } from './ListOfMovies.styled';
import PropTypes from 'prop-types';
const ListOfMovies = ({ movies }) => {
  return (
    <>
      <Ul>
        {movies.map(movie => (
          <ListOfMoviesItem key={movie.id} movie={movie} />
        ))}
      </Ul>
    </>
  );
};
export default ListOfMovies;
ListOfMovies.propType = {
  movies: PropTypes.array.isRequired,
};
