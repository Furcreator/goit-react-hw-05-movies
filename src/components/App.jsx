import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Movie = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const PageNotFound = lazy(() =>
  import('../components/PageNotFound/PageNotFound')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
