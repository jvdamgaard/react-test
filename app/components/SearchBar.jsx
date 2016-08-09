import React from 'react';

export default function SearchBar({ query, onChange }) {
  return (
    <div style={SearchBar.styles.div}>
      <h3>Search for an Artist</h3>
      <input
        onChange={onChange}
        value={query}
        style={SearchBar.styles.input}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

SearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'center',
  },
  input: {
    width: '60%',
  },
};
