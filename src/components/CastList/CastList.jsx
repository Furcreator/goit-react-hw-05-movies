import CastListItem from '../CastListItem/CastListItem';

const CastList = ({ cast }) => {
  return (
    <>
      <ul>
        {cast.map(cast => (
          <CastListItem key={cast.id} cast={cast} />
        ))}
      </ul>
    </>
  );
};
export default CastList;
