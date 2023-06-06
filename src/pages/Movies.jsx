import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import SearchingForm from 'components/SearchingForm/SearchingForm';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'utils/api';
import { MoviesContainer, SearchImg } from './Movies.styled';
import searchGif from '../images/search.gif';

const Movie = () => {
  const [listMovies, setListMovies] = useState(null);
  const [error, setError] = useState(null);
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getSearchMovie(query, page)
        .then(data => {
          if (data.results.length === 0) {
            setSearchParams('');
            return;
          }
          setListMovies(data.results);
        })
        .catch(error => setError(error));
    }
  }, [query, page, setSearchParams]);

  const onSubmitForm = result => {
    setSearchParams({ query: result });
  };

  return (
    <section>
      <MoviesContainer>
        <Title text={'Search Movie'} />
        {error && <p>{error}</p>}
        <SearchingForm onSubmitForm={onSubmitForm} />
        {!listMovies && <SearchImg src={searchGif} alt="as" />}
        {listMovies && <ListOfMovies movies={listMovies} />}
      </MoviesContainer>
    </section>
  );
};
export default Movie;
