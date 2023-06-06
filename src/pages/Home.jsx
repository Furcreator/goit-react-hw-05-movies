import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'utils/api';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => setError(error));
  }, []);
  return (
    <HomeContainer>
      <section>
        {error && <p>{error}</p>}
        <Title text="Trending Movies" />
        {trendingMovies && <ListOfMovies movies={trendingMovies} />}
      </section>
    </HomeContainer>
  );
};
export default Home;
