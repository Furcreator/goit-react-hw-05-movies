import { Span } from 'components/CastListItem/CastListItem.styled';
import { ReviewerText, ReviewsLi, ReviewsUl } from './ReviewsList.styled';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsUl>
      {reviews.map(info => {
        return (
          <ReviewsLi key={info.id}>
            <ReviewerText>
              <Span>Reviewer:</Span> {info.author}
            </ReviewerText>
            <p>{info.content}</p>
          </ReviewsLi>
        );
      })}
    </ReviewsUl>
  );
};
export default ReviewsList;
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
