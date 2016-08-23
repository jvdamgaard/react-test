import React from 'react';
import style from './style.css';

export default function SearchBar({ albumSearch, onChange }) {
  return (
    <div className={style.container}>
      <h3>Search for an Artist</h3>
      <input
        onChange={onChange}
        value={albumSearch}
        className={style.input}
      />
    </div>
  );
}

SearchBar.propTypes = {
  albumSearch: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
