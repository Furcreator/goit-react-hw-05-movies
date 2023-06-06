import { MovieImg } from 'components/MovieCard/MovieCard.styled';
import noActorPhoto from '../../images/noActor.jpeg';
import {
  CastListItemContainer,
  CastListItemText,
  Span,
} from './CastListItem.styled';
import PropTypes from 'prop-types';

const CastListItem = ({ cast }) => {
  let actorPhoto = noActorPhoto;
  if (cast.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
  }

  return (
    <li>
      <CastListItemContainer>
        <MovieImg src={actorPhoto} alt="actor-img"></MovieImg>

        <CastListItemText>
          <Span>Name:</Span> {cast.name}
        </CastListItemText>
        <CastListItemText>
          <Span>Role:</Span> {cast.character}
        </CastListItemText>
      </CastListItemContainer>
    </li>
  );
};
export default CastListItem;
CastListItem.propType = {
  cast: PropTypes.object.isRequired,
};
