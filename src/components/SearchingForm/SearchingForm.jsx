import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { Button, Input, SearchContainer } from './SearchingForm.styled';
import PropTypes from 'prop-types';

const SearchingForm = ({ onSubmitForm }) => {
  const [query, setQuery] = useState('');

  const onHandleChange = e => {
    setQuery(e.target.value);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      setQuery('');
      return;
    }
    onSubmitForm(query);
    setQuery('');
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <SearchContainer>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={onHandleChange}
        />
        <Button type="submit">
          <HiSearch fontSize="15px" />
        </Button>
      </SearchContainer>
    </form>
  );
};
export default SearchingForm;

SearchingForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};