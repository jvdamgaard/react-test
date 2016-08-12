import React from 'react';
import style from './style.css';

export default function SearchBar({ query, onChange }) {
  return (
    <div className={style.container}>
      <h3>Search for an Artist</h3>
      <input
        onChange={onChange}
        value={query}
        className={style.input}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
