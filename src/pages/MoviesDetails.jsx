import MovieInfo from 'components/MovieInfo/MovieInfo';
import Title from 'components/Title/Title';

import { Link, Outlet, useParams } from 'react-router-dom';


const MoviesDetails = () => {
  const { moviesId } = useParams();

  return (
    <main>
      <section>
        <MovieInfo moviesId={moviesId}>Information about movie</MovieInfo>
        <Title text={'Aditional information'} />
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </section>
    </main>
  );
};
export default MoviesDetails;
