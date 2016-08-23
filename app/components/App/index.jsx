import React from 'react';
import SearchBar from '../../containers/SearchBar';

export default function App({ params, children }) {
  return (
    <div>
      <SearchBar query={params.query || ''} />
      {children}
    </div>
  );
}

App.propTypes = {
  params: React.PropTypes.object.isRequired,
  children: React.PropTypes.object,
};
