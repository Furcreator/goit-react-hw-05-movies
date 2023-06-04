import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import MoviesDetails from 'pages/MoviesDetails';
import Movie from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<div>CAST</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
