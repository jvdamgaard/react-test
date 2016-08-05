import React from 'react';

export default function SearchBar({ searchTerm, onChange, onKeyPress }) {
  return (
    <div style={SearchBar.styles.div}>
      <h3>Search for an Artist</h3>
      <input
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={searchTerm}
        style={SearchBar.styles.input}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onKeyPress: React.PropTypes.func.isRequired,
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
