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
        if (data.results.length === 0) {
          setSearchParams('');
          return;
        }
        setListMovies(data.results);
      });
    }
  }, [query, page, setSearchParams]);

  const onSubmitForm = result => {
    setSearchParams({ query: result });
  };

  return (
    <main>
      <section>
        <Title text={'Search Movie'} />
        <SearchingForm onSubmitForm={onSubmitForm} />
        {listMovies && <ListOfMovies movies={listMovies} />}
      </section>
    </main>
  );
};
export default Movie;
