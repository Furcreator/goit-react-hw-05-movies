import noActorPhoto from '../../images/noActor.jpeg';

const CastListItem = ({ cast }) => {
  let actorPhoto = noActorPhoto;
  if (cast.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
  }

  return (
    <li>
      <div>
        <img src={actorPhoto} alt="actor-img"></img>
        <p>Name: {cast.name}</p>
        <p>Role: {cast.character}</p>
      </div>
    </li>
  );
};
export default CastListItem;
