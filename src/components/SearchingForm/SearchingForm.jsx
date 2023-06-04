import { useState } from 'react';

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
      <button type="submit">
        <span>Search</span>
      </button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={onHandleChange}
      />
    </form>
  );
};
export default SearchingForm;
