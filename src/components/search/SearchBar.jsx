import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from './SearchBar.css';

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

SearchBar.mixins = [PureRenderMixin];
SearchBar.propTypes = {
  albumSearch: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
