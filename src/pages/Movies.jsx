import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import SearchingForm from 'components/SearchingForm/SearchingForm';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'utils/api';

const Movie = () => {
  const [listMovies, setListMovies] = useState(null);
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getSearchMovie(query, page).then(data => {
        setListMovies(data.results);
      });
    }
  }, [query, page]);

  const onSubmitForm = result => {
    setSearchParams({ query: result });
  };

  return (
    <>
      <Title text={'Search Movie'} />
      <SearchingForm onSubmitForm={onSubmitForm} />
      {listMovies && <ListOfMovies movies={listMovies} />}
    </>
  );
};
export default Movie;
