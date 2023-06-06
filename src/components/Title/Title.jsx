import { TitleText } from './Title.styled';
import PropTypes from 'prop-types';
const Title = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};
export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
