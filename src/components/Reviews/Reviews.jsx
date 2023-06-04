import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsOfMovie } from 'utils/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getReviewsOfMovie(moviesId).then(data => {
      setReviews(data.results);
    });
  }, [moviesId]);
  return <div reviews={reviews}></div>;
};
export default Reviews;
