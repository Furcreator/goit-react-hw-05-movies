import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Title from 'components/Title/Title';
import { Suspense } from 'react';

import { Outlet, useParams } from 'react-router-dom';
import {
  MoviesDetailsContainer,
  MoviesDetailsLinkContainer,
} from './MoviesDetails.styled';
import { NavLinkStyled } from 'components/Header/Header.styled';

const MoviesDetails = () => {
  const { moviesId } = useParams();

  return (
    <main>
      <section>
        <MoviesDetailsContainer>
          <MovieInfo moviesId={moviesId}>Information about movie</MovieInfo>
          <Title text={'Aditional information'} />
          <MoviesDetailsLinkContainer>
            <NavLinkStyled to="cast">Cast</NavLinkStyled>
            <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
          </MoviesDetailsLinkContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MoviesDetailsContainer>
      </section>
    </main>
  );
};
export default MoviesDetails;
