import noPoster from '../../images/noPhoto.png';
import {
  MovieCardContainer,
  MovieImg,
  MovieMediumTitle,
  MovieTitle,
} from './MovieCard.styled';
import PropTypes from 'prop-types';
const MovieCard = ({ movie }) => {
  const { genres, overview, original_title, vote_average, poster_path } = movie;
  const score = Math.round(vote_average * 10);
  const genresOfMovie = genres.map(item => item.name);
  let posterPath = noPoster;
  if (poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return (
    <MovieCardContainer>
      <MovieImg src={posterPath} alt="poster-film" />
      <div>
        <MovieTitle>{original_title}</MovieTitle>
        <p>User Score: {score}% </p>
        <MovieMediumTitle>Overview</MovieMediumTitle>
        <p>{overview}</p>
        <MovieMediumTitle>Genres</MovieMediumTitle>
        <p>{genresOfMovie.join(', ')}</p>
      </div>
    </MovieCardContainer>
  );
};
export default MovieCard;
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}