import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Title from 'components/Title/Title';
import { Suspense } from 'react';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};
export default MoviesDetails;
